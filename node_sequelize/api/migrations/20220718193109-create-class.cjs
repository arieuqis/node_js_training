'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Classes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      init_date: {
        type: Sequelize.DATEONLY
      },
      professor_id : {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Persons',
          key: 'id'
        }
      },
      level_id : {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Levels',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Classes');
  }
};