'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      let genres = [
        {
          name: "Programming Language",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Historical Fiction",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Philosophy",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
      await queryInterface.bulkInsert('genres', genres, {});

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
