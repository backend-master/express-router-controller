const express = require("express");
const Router = express.Router();

const booksController = require("../controllers/booksController");

Router.route("/")
  .get(booksController.getAllBooks)
  .post(booksController.addBooks);

module.exports = Router;
