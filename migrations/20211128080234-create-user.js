'use strict'

const TABLE = 'Users'

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
        firebaseUid: {
          type: Sequelize.STRING,
          allowNull: false
        },
        twitterUid: {
          type: Sequelize.STRING,
          allowNull: false
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        avatarUrl: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        twitterToken: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        twitterSecret: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        deletedAt: {
          allowNull: true,
          type: Sequelize.DATE
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

    await queryInterface.addIndex(TABLE, ['firebaseUid'], {unique: true})
    await queryInterface.addIndex(TABLE, ['twitterUid'], {unique: true})
  },
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(TABLE)
  }
};