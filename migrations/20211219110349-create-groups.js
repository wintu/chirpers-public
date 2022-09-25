'use strict'

const TABLE = 'Groups'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      TABLE,
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        isDefault: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false
        },
        deletedAt: {
          type: Sequelize.DATE,
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
      },
      {
        charset: 'utf8mb4'
      }
    )

    await queryInterface.addIndex(TABLE, ['userId'])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(TABLE)
  }
}
