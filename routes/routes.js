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
    try {
        console.log(books.getAllBooks())
        res.send(books.getAllBooks())
    } catch (err) {
        next(err)
    }
}

function getBook(req, res, next) {
    try {
        res.send(books.getBook(req.params.bookId))
    } catch (err) {
        next(err)
    }
}

function addBook(req, res, next) {
    try {
        res.send(books.addBook(req.body.title, req.body.description))
    } catch (err) {
        next(err)
    }
}

function updateBookTitle(req, res, next) {
    try {
        res.send(books.addBook(req.body.title))
    } catch (err) {
        next(err)
    }
}

function updateBookDescription(req, res, next) {
    try {
        res.send(books.addBook(req.body.description))
    } catch (err) {
        next(err)
    }
}

function deleteBook(req, res, next) {
    try {
        res.send(books.addBook(req.params.bookId))
    } catch (err) {
        next(err)
    }
}