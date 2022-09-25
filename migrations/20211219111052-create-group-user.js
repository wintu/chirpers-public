'use strict'

const TABLE = 'GroupUsers'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      groupId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      twitterUserId: {
        type: Sequelize.INTEGER,
        allowNull: false
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

    await queryInterface.addIndex(TABLE, ['groupId', 'twitterUserId'], {unique: true})
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(TABLE)
  }
}