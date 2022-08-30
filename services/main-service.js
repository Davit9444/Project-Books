const { Book } = require('../models');
const { Author } = require('../models');
const { Genre } = require('../models');
const {where} = require("sequelize");

async function getAllBooks() {
    const books = await Book.findAll();

    return books;
}

async function getAllAuthors() {
    const authors = await Author.findAll();

    return authors;
}

async function getAllGenres() {
    const genres = await Genre.findAll();

    return genres;
}

async function createBook(book) {
    const info = {
        name: book.name,
        genre: book.genre,
        author: book.author,
        createdAt: new Date(),
        updatedAt: new Date()
    }
    const newBook = await Book.create(info);

    return newBook;
}

async function updateBook(book) {

    const id = book.id;
    const updateBooks  = await Book.update(book, {where :{ id: id}});

    return updateBooks;
}

async function deleteBook(book) {
    const id = book;
    const deleteBooks = await Book.destroy( {where : {id: id}});

    return deleteBooks;
}

async function createGenre(book) {
    const genre = {
        name: book.name,
        createdAt: new Date(),
        updatedAt: new Date()
    }
    const newGenre = await Genre.create(genre);

    return newGenre;
}

async function updateGenre(book) {
    const id = book.id;
    const updateGenres = await Genre.update(book, {where:{id: id}});

    return updateGenres;
}

async function deleteGenre(book) {
    const id = book;
    const deleteGenres = await Genre.destroy({where: {id: id}});

    return deleteGenres;
}

async function createAuthor(book) {
    const author = {
        name: book.name,
        genre_id: book.genre_id,
        createdAt: new Date(),
        updatedAt: new Date()
    }
    const newAuthor = await Author.create(author);

    return newAuthor;
}

async function updateAuthor(book) {
    const id = book.id;
    const updateAuthors = await Author.update(book, {where: {id: id}});

    return updateAuthors;
}

async function deleteAuthor(book) {
    const id = book;
    const deleteAuthors = await Author.destroy({where: {id: id}});

    return deleteAuthors;
}





module.exports = {
    getAllBooks,
    getAllAuthors,
    getAllGenres,
    createBook,
    updateBook,
    deleteBook,
    createGenre,
    updateGenre,
    deleteGenre,
    createAuthor,
    updateAuthor,
    deleteAuthor
}


