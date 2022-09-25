const config = require('config')
const dayjs = require('dayjs')
const models = require('../models')
const _ = require('lodash')
const {TwitterApi, UserV2, UserV2Result} = require('twitter-api-v2')

/**
 * 
 * @typedef User
 * @property {number} id
 */

/**
 * 
 * @param {User} user 
 * @param {function(Array.<UserV2>)} callback 
 */

async function fetchFollowing(user, callback) {
  /**
   * @type {TwitterApi}
   */
  const client = user.createTwitterClient()
  let nextToken
  do {
    const {data, meta} = await client.v2.following(user.twitterUid, {
      max_results: 1000,
      'user.fields': ['profile_image_url'],
      ...(nextToken ? {pagination_token: nextToken} : {})
    })
    await callback?.(data)
    nextToken = meta.next_token
  } while (nextToken)
}

/**
 * 
 * @param {User} user 
 * @param {Array.<UserV2>} follows 
 * @param {string} processedAt 
 */

async function _updateFollowing(user, follows, processedAt) {
  await models.TwitterUser.bulkCreate(
    follows.map(u => ({
      twitterUid: u.id,
      twitterId: u.username,
      name: u.name,
      avatarUrl: u.profile_image_url
    })),
    {
      updateOnDuplicate: ['name', 'avatarUrl', 'twitterId']
    }
  )

  const [[followsGroup], followIds] = await Promise.all([
    models.Group.findOrCreate({
      where: {userId: user.id, isDefault: true},
      defaults: {name: 'フォロー中'}
    }),

    models.TwitterUser.findAll({
      where: {twitterUid: follows.map(u => u.id)},
      attributes: ['id']
    }).then(result => result.map(r => r.id))
  ])

  await models.GroupUser.bulkCreate(
    followIds.map(twitterUserId => ({twitterUserId, groupId: followsGroup.id, processedAt})),
    {
      updateOnDuplicate: ['processedAt']
    }
  )
}

/**
 * 
 * @param {User} user 
 * @param {string} processedAt
 */

async function _deleteUnFollowing(user, processedAt) {
  const groupIds = await models.Group.findAll({
    where: {userId: user.id},
    attributes: ['id'],
    raw: true
  }).then(result => result.map(g => g.id))

  await models.GroupUser.destroy({
    where: {
      groupId: groupIds,
      [models.Sequelize.Op.or]: [
        {processedAt: {[models.Sequelize.Op.not]: processedAt}},
        {processedAt: null}
      ]
    }
  })
}

/**
 * 
 * @param {User} user 
 */
async function updateFollowing(user) {
  const processedAt = dayjs().format('YYYY-MM-DD HH:mm:ss.SSS')
  user.followsUpdatedAt = processedAt
  await user.save()
  await fetchFollowing(user, data => _updateFollowing(user, data, processedAt))
  await _deleteUnFollowing(user, processedAt)
}

/**
 * 
 * @param {string} token 
 * @param {string} secret 
 * @returns {Promise<UserV2Result>}
 */
function fetchUserInfoByToken(token, secret) {
  const client = new TwitterApi({
    accessToken: token,
    accessSecret: secret,
    appKey: config.twitter.token,
    appSecret: config.twitter.secret
  })

  return client.v2.me({'user.fields': ['profile_image_url']})
}

module.exports = {
  updateFollowing,
  fetchFollowing,
  fetchUserInfoByToken
}