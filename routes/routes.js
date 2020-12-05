var path = require("path");
var express = require('express');
var router = express.Router();
var userController = require('../controller/userController');
var user = require('../models/userModel');
var books = require('../models/bookModel');


router.get('/getAllBooks', userController.grantAccess('readAny', 'book'), getAllBooks);
router.get('/getBook/:bookId', userController.grantAccess('readAny', 'book'), getBook);

router.post('/addBook', userController.grantAccess('updateAny', 'book'), addBook);
router.post('/updateBookTitle', userController.grantAccess('updateAny', 'book'), updateBookTitle);
router.post('/updateBookDescription', userController.grantAccess('updateAny', 'book'), updateBookDescription);
 
router.delete('/deleteBook/:bookId', userController.grantAccess('deleteAny', 'book'), deleteBook);
 
module.exports = router;

function getAllBooks(req, res, next) {
    books.getAllBooks()
        .then(books => res.json(books))
        .catch(err => next(err));
}

function getBook(req, res, next) {
    books.getBook(req.params.bookId)
        .then(book => res.json(book))
        .catch(err => next(err));
}

function addBook(req, res, next) {
    books.addBook(req.body.title, req.body.description)
        .then(book => res.json(book))
        .catch(err => next(err));
}

function updateBookTitle(req, res, next) {
    books.addBook(req.body.title)
        .then(book => res.json(book))
        .catch(err => next(err));
}

function updateBookDescription(req, res, next) {
    books.addBook(req.body.description)
        .then(book => res.json(book))
        .catch(err => next(err));
}

function deleteBook(req, res, next) {
    books.addBook(req.params.bookId)
        .then(res => res.json({ message: res }))
        .catch(err => next(err));
}