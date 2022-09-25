'use strict'
const {Model} = require('sequelize')
const {TwitterApi} = require('twitter-api-v2')
const config = require('config')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    createTwitterClient() {
      if (!this?.twitterToken || !this?.twitterSecret) return
      return new TwitterApi({
        accessToken: this.twitterToken,
        accessSecret: this.twitterSecret,
        appKey: config.twitter.token,
        appSecret: config.twitter.secret
      })
    }

    static get BASE_ATTRIBUTES() {
      return ['id', 'twitterUid', 'name', 'avatarUrl']
    }

    static associate(models) {
      // define association here
    }
  }

  return User.init(
    {
      firebaseUid: {
        type: DataTypes.STRING,
        allowNull: false
      },
      twitterUid: {
        type: DataTypes.STRING,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      avatarUrl: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          isUrl: true
        }
      },
      twitterToken: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      twitterSecret: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      followsUpdatedAt: {
        type: DataTypes.DATE,
        allowNull: true
      }
    },
    {
      sequelize,
      paranoid: true,
      modelName: 'User',
      indexes: [
        {fields: ['firebaseUid'], unique: true},
        {fields: ['twitterUid'], unique: true}
      ]
    }
  )
}