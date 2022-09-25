const express = require('express')
const router = express.Router()
const {check, validationResult} = require('express-validator')
const authFilter = require('../filter/auth')
const models = require('../models')
const sanitizeHtml = require('sanitize-html')
const {InvalidParamsError, BaseError, NotFoundError} = require('../libs/error')
const logicMedia = require('../logic/media')

class AccessDenied extends BaseError {
  constructor(message, optional = {}) {
    super('2000', 'AccessDenied', message || 'つぶやきへのアクセス権限がありません', optional)
  }
}

router.get('/', authFilter(), async (req, res, next) => {
  const limit = req.query.limit ? +req.query.limit : 50
  const offset = req.query.offset ? +req.query.offset : 0

  const entries = await models.Entry.findAll({
    include: {
      model: models.Group,
      as: 'group',
      required: false
    },
    where: {userId: req.currentUser.id},
    limit,
    offset
  })

  res.json({ok: 1, entries})
})

const URL_REGEXP = /(\b(https?):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim
router.post(
  '/',
  [authFilter(), check('content').exists(), check('groupId').optional({checkFalsy: true}).isInt()],
  async (req, res, next) => {
    const validationErrors = validationResult(req)
    if (!validationErrors.isEmpty()) return next(new InvalidParamsError(validationErrors))

    const user = req.currentUser
    const groupId = req.body.groupId ? +req.body.groupId : null
    const content = sanitizeHtml(
      req.body.content.replace(URL_REGEXP, '<a href="$1" target="_blank" class="ui-link">$1</a>'),
      {
        allowedTags: ['a'],
        allowedAttributes: {
          a: ['class', 'href', 'target']
        }
      }
    )

    const entry = await models.sequelize.transaction(async t => {
      const entry = await models.Entry.create({userId: user.id, groupId, content}, {transaction: t})

      if (req.body.mediaIds.length < 1) return entry
      await models.MediaRelationship.bulkCreate(
        req.body.mediaIds.map(id => ({entryId: entry.id, mediaId: +id})),
        {transaction: t}
      )

      return entry
    })

    res.json({ok: 1, entry})
  }
)

// 閲覧情報の取得
router.get('/:entryId/public', [check('entryId').exists(), authFilter(true)], async (req, res, next) => {
  const validationErrors = validationResult(req)
  if (!validationErrors.isEmpty()) return next(new InvalidParamsError(validationErrors))

  const entryId = req.params.entryId
  const entry = await models.Entry.findOne({
    include: [
      {
        model: models.Group,
        as: 'group',
        required: false,
        ...(req.currentUser
          ? {
              include: {
                model: models.TwitterUser,
                as: 'twitterUsers',
                required: false,
                where: {twitterUid: req.currentUser.twitterUid}
              }
            }
          : {})
      },
      {
        model: models.Media,
        required: false,
        as: 'media'
      },
      {
        model: models.User,
        as: 'user',
        required: true,
        attributes: models.User.BASE_ATTRIBUTES
      }
    ],
    attributes: models.Entry.PUBLIC_ATTRIBUTES,
    where: {
      [models.Sequelize.Op.or]: [
        {id: entryId, allowIdAccess: true},
        {uuid: entryId}
      ]
    }
  })

  if (!entry) return next(new NotFoundError)
  // アクセス条件に反してる
  if (entry.userId !== req.currentUser?.id && !entry.group?.twitterUsers?.[0] && entry.groupId) {
    return next(
      new AccessDenied(`このつぶやきは${entry.group.name}の方達のみが閲覧できます`, {
        group: {id: entry.group.id, name: entry.group.name}
      })
    )
  }

  res.json({ok: 1, entry: entry.get({plain: true})})
})

router.post('/:entryId(\\d+)/delete', [check('entryId').isInt(), authFilter()], async (req, res, next) => {
  const validationErrors = validationResult(req)
  if (!validationErrors.isEmpty()) return next(new InvalidParamsError(validationErrors))

  const entryId = +req.params.entryId

  await models.sequelize.transaction(async t => {
    await Promise.all([
      models.Entry.destroy({
        where: {userId: req.currentUser.id, id: entryId},
        transaction: t
      }),

      logicMedia.deleteRelatedMedia('entry', entryId, t)
    ])
  })

  res.json({ok: 1})
})

module.exports = router