import express from "express"
import BookController from "../controllers/bookController.js"

const router = express.Router()

router
  .get("/books", BookController.findAllBooks)
  .get("/books/search", BookController.findBooksByEditor)
  .post("/books", BookController.createBook)
  .put("/books/:id", BookController.updateBook)
  .get("/books/:id", BookController.findById)
  .delete("/books/:id", BookController.deleteBook)

export default router