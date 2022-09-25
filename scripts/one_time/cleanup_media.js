const logicMedia = require('../../logic/media')
const models = require('../../models');

(async () => {
  const deletedEntry = await models.Entry.findAll({
    where: {deletedAt: {[models.Sequelize.Op.not]: null}},
    paranoid: false
  })

  await models.sequelize.transaction(async t => {
    await Promise.all(deletedEntry.map(entry => logicMedia.deleteRelatedMedia('entry', entry.id, t)))
  })

  await models.sequelize.close()
})()
