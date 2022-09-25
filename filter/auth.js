const firebaseApp = require('../libs/firebase')
const {getAuth} = require('firebase-admin/auth')
const authClient = getAuth(firebaseApp)
const {UnauthorizedAccessError} = require('../libs/error')
const models = require('../models')
const logicUser = require('../logic/user')
const dayjs = require('dayjs')

module.exports = (optional = false) => {
  return async (req, res, next) => {
    const idToken = req.headers['x-auth-token']
    if (!idToken) return next(optional ? undefined : new UnauthorizedAccessError('ログインしてください'))
    const decoded = await authClient.verifyIdToken(idToken)
    const user = await models.User.findOne({where: {firebaseUid: decoded?.uid}})

    if (!user) return next(optional ? undefined : new UnauthorizedAccessError('ログインしてください'))
    req.currentUser = user.get({plain: true})
    next()

    // API アクセス時に更新をかける
    if (user.followsUpdatedAt && dayjs().diff(user.followsUpdatedAt, 'days') < 1) return
    logicUser.updateFollowing(user).catch(e => console.error(e))
  }
}
