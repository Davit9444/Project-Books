'use strict';

const {getAllGenres} = require("../services/main-service");
module.exports = {
  async up (queryInterface, Sequelize) {
     const authors = [
       {
         name: "Kyle Simpson",
         genre_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
       },
         {
             name: "Frank Herbert",
             genre_id: 2,
             createdAt: new Date(),
             updatedAt: new Date()

         },
         {
             name: "Judith Valente",
             genre_id: 3,
             createdAt: new Date(),
             updatedAt: new Date()

         }



     ]
     await queryInterface.bulkInsert('authors', authors, {});

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
