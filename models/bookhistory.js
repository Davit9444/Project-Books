'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  }
  BookHistory.init({
    name: DataTypes.STRING,
    author: DataTypes.STRING,
    genre: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'book_histories',
  });
  return BookHistory;
};