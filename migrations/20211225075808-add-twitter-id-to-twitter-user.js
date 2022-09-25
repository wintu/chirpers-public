'use strict'

const TABLE = 'TwitterUsers'
const COL = 'twitterId'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(TABLE, COL, {
      type: Sequelize.STRING,
      allowNull: false,
      after: 'twitterUid'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(TABLE, COL)
  }
}
