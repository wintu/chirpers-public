const cron = require('node-cron')
const logicMedia = require('./logic/media')

module.exports = () => {
  if (process.env.NODE_ENV !== 'production') return
  cron.schedule('0 0 * * *', logicMedia.deleteFromRemote)
}