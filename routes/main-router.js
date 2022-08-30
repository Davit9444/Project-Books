const express = require('express');
const router = express.Router();
const MainController = require('../controllers/main-controller');


router.get('/books', MainController.getBooks);
router.get('/authors', MainController.getAuthors);
router.get('/genres', MainController.getGenres);
router.post('/books', MainController.addBooks);
router.put('/books', MainController.upBook);
router.delete('/books/:id', MainController.deleteBooks);
router.post('/genres', MainController.addGenre);
router.put('/genres', MainController.upGenre);
router.delete('/genres/:id', MainController.deleteGenres);
router.post('/authors', MainController.addAuthors);
router.put('/authors', MainController.upAuthors);
router.delete('/authors/:id', MainController.deleteAuthors);



module.exports = router;