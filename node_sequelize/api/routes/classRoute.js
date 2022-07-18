import { Router } from "express"
import ClassController from "../controllers/ClassController.js"

const router = Router()

router
    .get("/classes", ClassController.getAll)
    .get("/classes/:id", ClassController.getById)
    .post("/classes", ClassController.createClass)
    .put("/classes/:id", ClassController.updateClass)
    .delete("/classes/:id", ClassController.deleteClass)

export default router