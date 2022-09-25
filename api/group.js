const express = require('express')
const router = express.Router()
const {check, validationResult} = require('express-validator')
const authFilter = require('../filter/auth')
const models = require('../models')
const logicMedia = require('../logic/media')
const {InvalidParamsError} = require('../libs/error')

router.get('/', authFilter(), async (req, res, next) => {
  const user = req.currentUser
  const groups = await models.Group.findAll({
    where: {userId: user.id}
  })

  const resultGroups = await Promise.all(groups.map(async group => {
    const twitterUsers = await models.TwitterUser.findAll({
      include: {
        model: models.GroupUser,
        as: 'groupUsers',
        required: true,
        attributes: [],
        where: {groupId: group.id}
      },
      limit: 10
    })

    return {...group.get({plain: true}), twitterUsers}
  }))

  res.json({
    ok: 1,
    defaultGroup: resultGroups.find(g => g.isDefault),
    customGroups: resultGroups.filter(g => !g.isDefault)
  })
})

router.get('/defaultMembers', authFilter(), async (req, res, next) => {
  const user = req.currentUser
  const limit = req.query.limit ? +req.query.limit : 50
  const offset = req.query.offset ? +req.query.offset : 0
  const search = req.query.search || null

  const twitterUsers = await models.TwitterUser.findAll({
    include: {
      model: models.Group,
      as: 'groups',
      required: true,
      where: {userId: user.id, isDefault: true},
      attributes: []
    },
    where: {
      ...(search
        ? {
            [models.Sequelize.Op.or]: [
              {twitterId: {[models.Sequelize.Op.like]: `%${search}%`}},
              {name: {[models.Sequelize.Op.like]: `%${search}%`}}
            ]
          }
        : {})
    },
    limit,
    offset
  })

  res.json({ok: 1, twitterUsers})
})

router.get('/:groupId(\\d+)', authFilter(), async (req, res, next) => {
  const user = req.currentUser
  const group = await models.Group.findOne({
    include: {
      model: models.TwitterUser,
      as: 'twitterUsers',
      required: true
    },
    where: {userId: user.id, id: +req.params.groupId}
  })

  res.json({ok: 1, group})
})

router.post('/:groupId', [authFilter(), check('name').exists(), check('twitterUserIds').isArray()], async (req, res, next) => {
  const validationErrors = validationResult(req)
  if (!validationErrors.isEmpty()) return next(new InvalidParamsError(validationErrors))

  const isNew = req.params.groupId === 'create'
  const userId = req.currentUser.id
  const targetUsers = await models.TwitterUser.findAll({
    where: {id: req.body.twitterUserIds},
    attributes: ['id'],
    raw: true
  })

  const group = await models.sequelize.transaction(async t => {
    const [group, created] = await models.Group.upsert({
      ...(isNew ? {} : {id: +req.params.groupId}),
      name: req.body.name,
      userId,
      isDefault: false
    }, {transaction: t})

    await Promise.all([
      models.GroupUser.bulkCreate(
        targetUsers.map(({id}) => ({twitterUserId: id, groupId: group.id})),
        {transaction: t, ignoreDuplicates: true}
      ),

      (() => {
        if (created) return
        return models.GroupUser.destroy({
          where: {groupId: group.id, twitterUserId: {[models.Sequelize.Op.notIn]: targetUsers.map(({id}) => id)}},
          transaction: t
        })
      })()
    ])

    return group
  })

  res.json({ok: 1, group})
})

router.post('/:groupId(\\d+)/delete', [authFilter(), check('groupId').isInt()], async (req, res, next) => {
  const validationErrors = validationResult(req)
  if (!validationErrors.isEmpty()) return next(new InvalidParamsError(validationErrors))

  const userId = req.currentUser.id
  const entries = await models.Entry.findAll({
    where: {userId, groupId: +req.params.groupId}
  })
  
  await models.sequelize.transaction(async t => {
    await Promise.all([
      models.Entry.destroy({
        where: {id: entries.map(e => e.id)},
        transaction: t
      }),

      models.Group.destroy({
        where: {userId, id: +req.params.groupId},
        transaction: t
      }),

      ...entries.map(entry => logicMedia.deleteRelatedMedia('entry', entry.id, t))
    ])
  })

  res.json({ok: 1})
})

module.exports = router
