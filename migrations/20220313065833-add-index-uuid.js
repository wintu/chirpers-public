'use strict'

const TABLE = 'Entries'
const COL = 'uuid'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addIndex(TABLE, [COL], {unique: true})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeIndex(TABLE, [COL])
  }
}
