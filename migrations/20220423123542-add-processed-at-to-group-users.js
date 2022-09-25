'use strict'

const TABLE = 'GroupUsers'
const COL = 'processedAt'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(TABLE, COL, {
      type: Sequelize.DATE(3),
      allowNull: true,
      after: 'twitterUserId'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(TABLE, COL)
  }
}

