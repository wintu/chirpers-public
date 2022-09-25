'use strict'

const {Model} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class GroupUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.TwitterUser, {as: 'twitterUser', foreignKey: 'twitterUserId'})
      this.belongsTo(models.Group, {as: 'group', foreignKey: 'groupId'})
    }
  }

  return GroupUser.init(
    {
      groupId: {type: DataTypes.INTEGER, allowNull: false},
      twitterUserId: {type: DataTypes.INTEGER, allowNull: false},
      processedAt: {type: DataTypes.DATE(3), allowNull: true}
    },
    {
      sequelize,
      modelName: 'GroupUser',
      indexes: [{fields: ['groupId', 'twitterUserId'], unique: true}]
    }
  )
}