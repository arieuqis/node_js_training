import database from "../models/index.cjs";

class ClassController {
  static getAll = async (req, res) => {
    try {
      const all = await database.Class.findAll();
      return res.status(200).json(all);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };

  static async getById(req, res) {
    const { id } = req.params;
    try {
      const umaTurma = await database.Class.findOne({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json(umaTurma);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async createClass(req, res) {
    const novaTurma = req.body;
    try {
      const novaTurmaCriada = await database.Class.create(novaTurma);
      return res.status(200).json(novaTurmaCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updateClass(req, res) {
    const { id } = req.params;
    const novasInfos = req.body;
    try {
      await database.Class.update(novasInfos, { where: { id: Number(id) } });
      const turmaAtualizada = await database.Class.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(turmaAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteClass(req, res) {
    const { id } = req.params;
    try {
      await database.Class.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ mensagem: `id ${id} deletado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

export default ClassController;
