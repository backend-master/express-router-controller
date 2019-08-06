const express = require("express");
const Router = express.Router();

const booksController = require("../controllers/booksController");

Router.route("/")
  .get(booksController.getAllBooks)
  .post(booksController.addBooks)
  .delete(booksController.deleteAllBooks);

Router.route("/:id")
  .get(booksController.getBookById)
  .put(booksController.updateBookById)
  .delete(booksController.deleteBookId);

module.exports = Router;
