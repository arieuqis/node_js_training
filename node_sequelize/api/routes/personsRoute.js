import { Router } from "express"
import PersonController from "../controllers/PersonController.js"

const router = Router()

router
    .get("/people", PersonController.getAll)

export default router