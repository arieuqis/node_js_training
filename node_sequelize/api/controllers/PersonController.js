import database from "../models/index.cjs"

class PersonController {
    static getAll = async (req, res) => {
        try {
            const allPeople = await database.Persons.findAll()
            return res.status(200).json(allPeople)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}

export default PersonController