'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      let books = [
          {
            name: "JavaScript",
            genre: "Programming Languages ",
            author: "David Flanagan",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: "C++",
            genre: "Programming Languages ",
            author: "Stephen Prata",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: "You don't know JS yet ",
            genre: "Programming Languages ",
            author: "Kyle Simpson",
            createdAt: new Date(),
            updatedAt: new Date()
          }
      ]

      await queryInterface.bulkInsert('books', books, {});

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
