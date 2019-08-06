require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 5000;
const booksRoute = require("./routes/books");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/books", booksRoute);

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
