const { getAllBooks,
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
        deleteAuthor, getAllBookHistory
} = require('../services/main-service');

async function getHistory(req, res) {
    const books = await getAllBookHistory();

    return res.send(books);
}
async function getBooks(req, res) {
    const books = await getAllBooks();

    return res.send(books);
}

async function getAuthors(req, res) {
    const authors = await getAllAuthors();

    return res.send(authors);
}

async function getGenres(req, res) {
    const genres = await getAllGenres();

    return res.send(genres);
}

async function addBooks(req, res) {
    const book = req.body;
    await createBook(book);

    return res.send({
        success: true,
        message: ['Book Created']
    })
}

async function upBook(req, res) {
    const book = req.body;
    await updateBook(book);
    //console.log(book);

    return res.send({
        success: true,
        message: ['Update Book']
    })
}

async function deleteBooks(req, res) {
    const bookId = req.params.id;
    await deleteBook(bookId);

    return res.send({
        success: true,
        message: ['Deleted Book']
    })
}

async function addGenre(req, res) {
    const genre = req.body;
    await createGenre(genre);

    return res.send({
        success: true,
        message: ['Genre Created']
    });

}

async function upGenre(req, res) {
    const genre = req.body;
    await updateGenre(genre);

    return res.send({
        success: true,
        message: ['Update Genre']
    });
}

async function deleteGenres(req, res) {
    const id = req.params.id;
    await deleteGenre(id);

    return res.send({
        success: true,
        message: ['Deleted Genre']
    });
}

async function addAuthors(req, res) {
    const author = req.body;
    await createAuthor(author);

    return res.send({
        success: true,
        message: ['Author Create']
    });
}

async function upAuthors(req, res) {
    const author = req.body;
    await updateAuthor(author);

    return res.send({
        success: true,
        message: ['Update Author']
    });
}

async function deleteAuthors(req, res) {
    const id = req.params.id;
    await deleteAuthor(id);

    return res.send({
        success: true,
        message: ['Deleted Author']
    });
}



module.exports = {
    getHistory,
    getBooks,
    getAuthors,
    getGenres,
    addBooks,
    upBook,
    deleteBooks,
    addGenre,
    upGenre,
    deleteGenres,
    addAuthors,
    upAuthors,
    deleteAuthors

}