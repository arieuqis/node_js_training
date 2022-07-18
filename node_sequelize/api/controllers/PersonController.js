import database from "../models/index.cjs";

class PersonController {
  static getAll = async (req, res) => {
    try {
      const allPeople = await database.Persons.findAll();
      return res.status(200).json(allPeople);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };

  static getById = async (req, res) => {
    const { id } = req.params;
    try {
      const person = await database.Persons.findOne({
        where: { id: Number(id) },
      });
      if (person) {
        return res.status(200).json(person);
      } else {
        return res.status(404).send("Not found");
      }
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };

  static createPerson = async (req, res) => {
    const newPerson = req.body;
    try {
      const person = await database.Persons.create(newPerson);
      return res.status(201).json(person);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };

  static updatePerson = async (req, res) => {
    const { id } = req.params;
    const updatedPerson = req.body;
    try {
      await database.Persons.update(updatedPerson, {
        where: { id: Number(id) },
      });
      const person = await database.Persons.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(person);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };

  static deletePerson = async (req, res) => {
    const { id } = req.params;
    try {
      await database.Persons.destroy({
        where: { id: Number(id) },
      });
      
      return res.status(200).json("Deu boa");
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };
}

export default PersonController;
