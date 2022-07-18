import { Router } from "express"
import PersonController from "../controllers/PersonController.js"

const router = Router()

router
    .get("/people", PersonController.getAll)
    .get("/people/:id", PersonController.getById)
    .post("/people", PersonController.createPerson)
    .put("/people/:id", PersonController.updatePerson)
    .delete("/people/:id", PersonController.deletePerson)
    .get("/people/:studentId/registrations/:registrationId", PersonController.getSingleRegistration)
    .get("/people/:studentId/registrations", PersonController.getAllRegistrations)
    .post("/people/:studentId/registrations", PersonController.createRegistration)
    .put("/people/:studentId/registrations/:registrationId", PersonController.updateRegistration)
    .delete("/people/:studentId/registrations/:registrationId", PersonController.deleteRegistration)

export default router