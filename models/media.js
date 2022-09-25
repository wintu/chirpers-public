'use strict'
const {Model} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Media extends Model {
    static get TYPE() {
      return Object.freeze({IMAGE: 1, VIDEO: 2})
    }

    static associate(models) {
      // define association here
    }
  }

  return Media.init(
    {
      type: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      url: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      deletedRemoteData: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      deletedAt: DataTypes.DATE
    },
    {
      sequelize,
      paranoid: true,
      modelName: 'Media'
    }
  )
}
