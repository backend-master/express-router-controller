# Express Router + Controller

- Easy to implement
- Easy to maintain
- Easy to develop

clone this repository and install requirement using npm :

```sh
npm install
```

or using yarn :

```sh
yarn
```
## API Endpoints

### /api/v1/books

| Endpoint            | HTTP   | Description       | Body             |
| ------------------- | ------ | ----------------- | ---------------- |
| `/api/v1/books/`    | POST   | Create New Book   | `title`,`author` |
| `/api/v1/books/`    | GET    | Get All Book      |                  |
| `/api/v1/books/:id` | GET    | Get Book By Id    |                  |
| `/api/v1/books/:id` | PUT    | Update Book By Id | `title`,`author` |
| `/api/v1/books/:id` | DELETE | Delete Book By Id |                  |

This project structure will be like this :

```sh
.
+-- controllers
|   +- booksController.js
+-- datas
|   +- books.js
+-- routes
|   +- books.js
+-- app.js
+-- package.json
+-- yarn.lock
+-- README.md
```

## Step by Step Explanation

1. Make a dummy data

go to `datas` folder and make new data dummy,
the data will simply like this :

```sh
module.exports = {
  nextId: 4,
  books: [
    {
      id: 1,
      title: "The Picture of Dorian Gray",
      author: "Oscar Wilde"
    }, ...
...
```

2. Make Controller

make a new controller for your dummy data,
for example you can make controller for :

- Create New Data
- Get All data
- Get Data By Id
- Update Data By Id
- Etc.

Export your data path on your controller file

```sh
const books = require("../datas/books");
```

and Here is some code for controller :

```sh
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
```

```sh
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
```

3. Create your route

after you make your controller, now it's time to use it to your route.

import your controller to your route file, this is an example for route file :

```sh
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
```

4. Go to app.js / server.js

the last part you just to import your route.

```sh
const booksRoute = require("./routes/books");
app.use("/api/v1/books", booksRoute);
```

and then go to terminal and try to run by typing `yarn dev` , you will see :

```sh
Server running at http://localhost:9090
```

## Reference :

1. [Routing With NodeJs (Express)](https://medium.com/@cmpbilge/routing-with-nodejs-express-4ce79752e146)
2. [API Development and Routing with Node.js and Express](https://alligator.io/nodejs/express-routing/)
