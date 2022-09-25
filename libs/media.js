const sharp = require('sharp')
const config = require('config')
const {S3} = require('@aws-sdk/client-s3')
const {v4: generateUUID} = require('uuid')
const ffmpeg = require('fluent-ffmpeg')
const ffpath = require('ffmpeg-static')
ffmpeg.setFfmpegPath(ffpath)
const faststart = require('node-faststart')
const fs = require('fs')

const bucket = new S3({
  endpoint: config.wasabi.endpoint,
  region: config.wasabi.region,
  credentials: {
    accessKeyId: config.wasabi.accessKey,
    secretAccessKey: config.wasabi.secret
  }
})

const TYPE_LIST = {
  'image/jpeg': {mime: 'image/jpeg', ext: 'jpg', category: 'image'},
  'image/png': {mime: 'image/png', ext: 'png', category: 'image'},
  'video/mp4': {mime: 'video/mp4', ext: 'mp4', category: 'video'},
  'video/quicktime': {mime: 'video/quicktime', ext: 'mov', category: 'video'}
}

module.exports = {
  findType(mime) {
    return TYPE_LIST[mime]
  },

  convertImages(images = []) {
    return Promise.all(
      images.map(async image => {
        const buffer = await sharp(image.buffer).jpeg({quality: 70, mozjpeg: true}).toBuffer()
        return {...image, buffer, type: {mime: 'image/jpeg', ext: 'jpg', category: 'image'}}
      })
    )
  },

  async uploadImages(images = []) {
    const convertedImages = await this.convertImages(images)
    return await Promise.all(
      convertedImages.map(image => {
        const filePath = `${config.wasabi.prefix}/uploads/${generateUUID()}.${image.type.ext}`
        return bucket
          .putObject({
            Bucket: config.wasabi.bucket,
            Key: filePath,
            ACL: 'public-read',
            Body: image.buffer
          })
          .then(() => ({type: 'image', url: `${config.wasabi.publicBaseUrl}${filePath}`}))
      })
    )
  },

  convertVideos(videos = []) {
    if (!fs.existsSync('tmp')) fs.mkdirSync('tmp')
    return Promise.all(
      videos.map(
        video =>
          new Promise((resolve, reject) => {
            const inputStream = faststart.convert(video.buffer, true)
            const fileName = `${generateUUID()}.mp4`
            ffmpeg(inputStream)
              .videoCodec('libx264')
              .audioCodec('aac')
              .outputOptions(['-movflags +faststart', '-crf 5'])
              // .on('stderr', out => console.log(out))
              .on('error', e => reject(e))
              .on('end', () => resolve(fileName))
              .output(`tmp/${fileName}`)
              .run()
          })
      )
    )
  },

  async uploadVideos(videos = []) {
    const convertedVideos = await this.convertVideos(videos)
    return await Promise.all(
      convertedVideos.map(videoName => {
        const filePath = `${config.wasabi.prefix}/uploads/${videoName}`
        return bucket
          .putObject({
            Bucket: config.wasabi.bucket,
            Key: filePath,
            ACL: 'public-read',
            Body: fs.createReadStream(`tmp/${videoName}`)
          })
          .then(() => {
            fs.rmSync(`tmp/${videoName}`)
            return {type: 'video', url: `${config.wasabi.publicBaseUrl}${filePath}`}
          })
      })
    )
  },

  /**
   *
   * @param {Array<string>} mediaUrls
   */
  deleteMedia(mediaUrls = []) {
    return bucket.deleteObjects({
      Bucket: config.wasabi.bucket,
      Delete: {
        Objects: mediaUrls.map(url => ({Key: url.replace(config.wasabi.publicBaseUrl, '')}))
      }
    })
  }
}