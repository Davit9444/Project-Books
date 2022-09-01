'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const bookHistory = [
      {
        name: "JavaScript",
        author: "Ando Flanagan",
        genre: "Programming Language",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "JavaScript",
        author: "Programming Languages ",
        genre: "David Flanagan",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]

      await queryInterface.bulkInsert('book_histories', bookHistory, {});

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
