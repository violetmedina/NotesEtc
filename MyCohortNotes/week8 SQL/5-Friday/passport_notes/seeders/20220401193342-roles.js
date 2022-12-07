'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

      await queryInterface.bulkInsert('roles', [
      {
        name: 'Admin',
        type: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Basic',
        type: 'basic',
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ], {});
      
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
