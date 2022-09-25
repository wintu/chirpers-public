'use strict'

const {Model} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class MediaRelationship extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  return MediaRelationship.init(
    {
      mediaId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      entryId: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    },
    {
      sequelize,
      modelName: 'MediaRelationship',
      indexes: [{fields: ['mediaId', 'entryId']}]
    }
  )
}
