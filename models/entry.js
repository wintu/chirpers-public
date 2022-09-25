'use strict'
const {Model} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Entry extends Model {
    static get PUBLIC_ATTRIBUTES() {
      return ['id', 'uuid', 'userId', 'groupId', 'content', 'createdAt']
    }

    static associate(models) {
      this.belongsToMany(models.Media, {
        through: models.MediaRelationship,
        as: 'media',
        foreignKey: 'entryId',
        otherKey: 'mediaId'
      })
      this.belongsTo(models.Group, {as: 'group', foreignKey: 'groupId'})
      this.belongsTo(models.User, {as: 'user', foreignKey: 'userId'})
    }
  }

  return Entry.init(
    {
      uuid: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      groupId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      allowIdAccess: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    },
    {
      sequelize,
      paranoid: true,
      modelName: 'Entry',
      indexes: [{fields: ['uuid'], unique: true}]
    }
  )
}
