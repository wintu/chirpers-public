const logics = require('../logic/user')
const models = require('../models');

(async () => {
  const user = await models.User.findOne()
  await logics.updateFollowing(user)

  await models.sequelize.close()
})()