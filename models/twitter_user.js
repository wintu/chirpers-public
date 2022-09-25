'use strict'

const {Model} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class TwitterUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Group, {
        through: models.GroupUser,
        as: 'groups',
        foreignKey: 'twitterUserId',
        otherKey: 'groupId'
      })

      this.hasMany(models.GroupUser, {
        as: 'groupUsers',
        foreignKey: 'twitterUserId'
      })
    }
  }

  return TwitterUser.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      twitterUid: {
        type: DataTypes.STRING,
        allowNull: false
      },
      twitterId: {
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
        validate: {isUrl: true}
      }
    },
    {
      sequelize,
      modelName: 'TwitterUser',
      paranoid: true,
      indexes: [
        {fields: ['userId'], unique: true},
        {fields: ['twitterUid'], unique: true}
      ]
    }
  )
}