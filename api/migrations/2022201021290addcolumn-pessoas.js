'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Pessoas', 'DeletedAt', {
      allowNull: true,
      type: Sequelize.DATE
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Pessoas', 'DeletedAt');
  }
};
