const express = require('express')
const router = express.Router()
const multer = require('multer')
const authFilter = require('../filter/auth')
const mediaLib = require('../libs/media')
const {BaseError} = require('../libs/error')
const _ = require('lodash')
const upload = multer({
  storage: multer.memoryStorage(),
  limits: '300MB'
})
const models = require('../models')

class MediaUploadError extends BaseError {
  constructor(message) {
    super('1000', 'MediaUploadError', message || 'ファイルのアップロードに失敗しました')
  }
}

router.post('/upload', [authFilter(), upload.array('media', 4)], async (req, res, next) => {
  const files = req.files.map(file => {
    const type = mediaLib.findType(file.mimetype)
    if (!type) throw new MediaUploadError('未対応のファイル形式です')
    return {buffer: file.buffer, type}
  })

  const medias = await Promise.all([
    mediaLib.uploadImages(files.filter(f => f.type.category === 'image')),
    mediaLib.uploadVideos(files.filter(f => f.type.category === 'video'))
  ]).then(results =>
    _(results)
      .flattenDeep()
      .map(file => ({url: file.url, type: models.Media.TYPE[file.type.toUpperCase()]}))
      .value()
  )

  const result = await models.Media.bulkCreate(medias)
  res.json({ok: 1, media: result.map(r => r.get({plain: true}))})
})

module.exports = router
