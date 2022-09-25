const express = require('express')
const router = express.Router()
const {check, validationResult} = require('express-validator')
const firebaseApp = require('../libs/firebase')
const {getAuth} = require('firebase-admin/auth')
const authClient = getAuth(firebaseApp)
const models = require('../models')
const dayjs = require('dayjs')
const logicUser = require('../logic/user')
const {InvalidParamsError} = require('../libs/error')

router.post(
  '/relate',
  [check('idToken').exists(), check('accessToken').exists(), check('secret').exists()],
  async (req, res, next) => {
    const validationErrors = validationResult(req)
    if (!validationErrors.isEmpty()) return next(new InvalidParamsError(validationErrors))

    const [decoded, profileInfo] = await Promise.all([
      authClient.verifyIdToken(req.body.idToken),
      logicUser.fetchUserInfoByToken(req.body.accessToken, req.body.secret)
    ])

    await models.User.upsert({
      firebaseUid: decoded.uid,
      twitterUid: decoded.firebase.identities['twitter.com'][0],
      name: decoded.name,
      avatarUrl: profileInfo.data.profile_image_url ?? decoded.picture,
      twitterToken: req.body.accessToken,
      twitterSecret: req.body.secret
    })

    res.json({ok: 1})

    // 一日経過後、フォロ-更新処理を行う
    models.User.findOne({where: {firebaseUid: decoded.uid}}).then(async user => {
      await models.TwitterUser.update({userId: user.id}, {where: {twitterUid: user.twitterUid}})

      if (user.followsUpdatedAt && dayjs().diff(user.followsUpdatedAt, 'days') < 1) return
      await logicUser.updateFollowing(user)
    })
  }
)

module.exports = router