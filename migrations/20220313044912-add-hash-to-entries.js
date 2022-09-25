'use strict'

const TABLE = 'Entries'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(TABLE, 'uuid', {
      type: Sequelize.UUID,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4,
      after: 'id'
    })

    await queryInterface.addColumn(TABLE, 'allowIdAccess', {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      after: 'content'
    })

    await queryInterface.sequelize.query(`UPDATE ${TABLE} SET uuid = uuid(), allowIdAccess = true`)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(TABLE, 'uuid')
    await queryInterface.removeColumn(TABLE, 'allowIdAccess')
  }
}

