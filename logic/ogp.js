const models = require('../models')

module.exports = {
  async get(req) {
    if (req.path.match('/e/')) return await this._readEntry(req)
    return this._default(req) 
  },

  _default(req) {
    return {
      url: `https://chirpers.wintu.dev${req.originalUrl}`,
      description: '親しい友達だけに伝える呟き',
      title: 'Chirpers'
    }
  },

  async _readEntry(req) {
    const entryId = req.path.replace('/e/', '')
    const entry = await models.Entry.findOne({
      include: [
        {
          model: models.User,
          as: 'user',
          required: true
        },
        {
          model: models.Group,
          as: 'group',
          required: false
        }
      ],
      where: {
        [models.Sequelize.Op.or]: [{id: entryId, allowIdAccess: true}, {uuid: entryId}]
      }
    })

    if (!entry) return this._default(req)
    return {
      url: `https://chirpers.wintu.dev${req.originalUrl}`,
      description: `${entry.user.name}さんの限定つぶやきをのぞいてみよう!`,
      title: `${entry.group?.name ?`${entry.group?.name}のみんな` : 'みんな'}だけに伝えたいつぶやき | Chirpers`
    }
  }
}