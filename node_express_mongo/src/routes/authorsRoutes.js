import express from "express"
import AuthorsController from "../controllers/AuthorsController.js"

const router = express.Router()

router
  .get("/authors", AuthorsController.findAllAuthors)
  .post("/authors", AuthorsController.createAuthor)
  .put("/authors/:id", AuthorsController.updateAuthor)
  .get("/authors/:id", AuthorsController.findById)
  .delete("/authors/:id", AuthorsController.deleteAuthor)

export default router