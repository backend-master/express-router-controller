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
    console.log(error);
    res.status(500).json({
      error: true,
      errorMessage: error,
      data: []
    });
  }
};
