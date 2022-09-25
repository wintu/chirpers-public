'use strict'

const {Model} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    static associate(models) {
      this.belongsToMany(models.TwitterUser, {
        through: models.GroupUser,
        as: 'twitterUsers',
        foreignKey: 'groupId',
        otherKey: 'twitterUserId'
      })
    }
  }

  return Group.init(
    {
      userId: {type: DataTypes.INTEGER, allowNull: false},
      name: {type: DataTypes.STRING, allowNull: false},
      isDefault: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    },
    {
      sequelize,
      modelName: 'Group',
      paranoid: true
    }
  )
}