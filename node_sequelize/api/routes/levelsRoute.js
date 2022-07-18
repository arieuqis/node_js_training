import { Router } from "express"
import LevelsController from "../controllers/LevelsController.js"

const router = Router()

router
    .get("/levels", LevelsController.getAll)
    .get("/levels/:id", LevelsController.getById)
    .post("/levels", LevelsController.createLevel)
    .put("/levels/:id", LevelsController.updateLevel)
    .delete("/levels/:id", LevelsController.deleteLevel)

export default router