'use strict'

const TABLE = 'Users'
const COL = 'followsUpdatedAt'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(TABLE, COL, {
      type: Sequelize.DATE,
      allowNull: true,
      after: 'twitterSecret'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(TABLE, COL)
  }
}

