const models = require('../models')
const dayjs = require('dayjs')
const mediaLib = require('../libs/media')
const _ = require('lodash')
const {Transaction} = require('sequelize')

/**
 * 
 * @param {string} target
 * @param {number} targetId
 * @param {Transaction} t Sequelize Transaction Object
 */
async function deleteRelatedMedia(target, targetId, t) {
  const relations = await models.MediaRelationship.findAll({
    where: {[`${target}Id`]: targetId},
    attributes: ['id', 'mediaId', `${target}Id`], //belongsToManyを利用時にIDが自動的に付与されないので
    transaction: t
  })

  await Promise.all([
    models.MediaRelationship.destroy({
      where: {id: relations.map(r => r.id)},
      transaction: t
    }),

    models.Media.destroy({
      where: {id: relations.map(r => r.mediaId)},
      transaction: t
    })
  ])
}

async function deleteFromRemote() {
  const deletedMedia = await models.Media.findAll({
    where: {
      deletedAt: {[models.Sequelize.Op.lt]: dayjs().subtract(3, 'day').format('YYYY-MM-DD HH:mm:ss')},
      deletedRemoteData: false
    },
    paranoid: false
  })

  if (!deletedMedia.length) return
  await mediaLib.deleteMedia(deletedMedia.map(media => media.url))
  await models.Media.update(
    {deletedRemoteData: true},
    {
      where: {id: deletedMedia.map(m => m.id)},
      paranoid: false
    }
  )
}

module.exports = {
  deleteRelatedMedia,
  deleteFromRemote
}