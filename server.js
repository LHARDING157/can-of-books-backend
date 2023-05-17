const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 8082;
const app = express();
app.use(cors());
const bp = require("body-parser");
app.use(bp.json());

const Book = require("./models/book");

mongoose.connect(process.env.DATABASE_URL);

app.get("/", (request, response) => {
  response.json("You are on the root route of my cat app.");
});

app.get("/books", async (request, response) => {
  const books = await Book.find(request.query);
  response.json(books);
});

// POST = CREATE
app.post("/books", async (request, response) => {
  const newBook = await Book.create(request.body);
  response.json(newBook);
});

// DELETE = DELETE
app.delete("/books/:id", async (request, response) => {
  const deleteBook = await Book.findByIdAndDelete(request.params.id);
  response.json(deleteBook);
});

//PUT = UPDATE
app.put("/books/:id", async (request, response) => {
  const updateBook = await Book.findByIdAndUpdate(
    request.params.id,
    request.body
  );
  response.json(updateBook);
});

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
