'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  }
  Book.init({
    name: DataTypes.STRING,
    genre: DataTypes.STRING,
    author: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'books',
  });
  return Book;
};