const books = require("../datas/books");

exports.getAllBooks = async (req, res) => {
  try {
    let data = books;

    res.status(200).json({
      error: false,
      errorMessage: null,
      data: data
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      errorMessage: error,
      data: []
    });
  }
};

exports.getBookById = (req, res) => {
  try {
    const bookId = books.books.filter(
      item => item.id === Number(req.params.id)
    );
    console.log(bookId);
    res.status(200).json({
      error: false,
      errorMessage: null,
      data: bookId
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      errorMessage: error,
      data: []
    });
  }
};

exports.addBooks = async (req, res) => {
  try {
    const title = req.body.title;
    const author = req.body.author;
    const id = books.nextId;

    let data = {
      id: id,
      title: title,
      author: author
    };

    books.books.push(data);
    books.nextId = books.nextId + 1;

    res.status(200).json({
      error: false,
      errorMessage: null,
      data: data
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      errorMessage: error,
      data: []
    });
  }
};

exports.updateBookById = (req, res) => {
  try {
    const data = {
      title: req.body.title,
      author: req.body.author
    };
    const updateBook = books.books.filter(item => {
      if (item.id === Number(req.params.id)) {
        return Object.assign(item, data);
      } else {
        return item;
      }
    });
    res.status(200).json({
      error: false,
      errorMessage: null,
      data: updateBook
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      errorMessage: error,
      data: []
    });
  }
};

exports.deleteAllBooks = (req, res) => {
  try {
    const deleteBooks = books.books.slice(0, books.books.length);
    console.log(deleteBooks);

    res.status(200).json({
      error: false,
      errorMessage: null,
      data: deleteBooks
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      errorMessage: error,
      data: []
    });
  }
};

exports.deleteBookId = (req, res) => {
  try {
    const deleteBookId = books.books.filter(
      item => item.id !== Number(req.params.id)
    );
    books.books = deleteBookId;
    res.status(200).json({
      error: false,
      errorMessage: null,
      data: deleteBookId
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      errorMessage: error,
      data: []
    });
  }
};
