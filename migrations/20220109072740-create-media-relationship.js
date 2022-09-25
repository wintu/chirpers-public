'use strict'

const TABLE = 'MediaRelationships'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mediaId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      entryId: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })

    await queryInterface.addIndex(TABLE, ['mediaId', 'entryId'])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(TABLE)
  }
}