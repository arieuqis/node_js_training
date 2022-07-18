import { Router } from "express"
import PersonController from "../controllers/PersonController.js"

const router = Router()

router
    .get("/people", PersonController.getAll)
    .get("/people/:id", PersonController.getById)
    .post("/people", PersonController.createPerson)
    .put("/people/:id", PersonController.updatePerson)
    .delete("/people/:id", PersonController.deletePerson)

export default router