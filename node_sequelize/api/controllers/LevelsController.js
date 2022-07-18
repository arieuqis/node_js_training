import database from "../models/index.cjs";

class LevelsController {
  static getAll = async (req, res) => {
    try {
      const allPeople = await database.Levels.findAll();
      return res.status(200).json(allPeople);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };

  static async getById(req, res) {
    const { id } = req.params;
    try {
      const umNivel = await database.Levels.findOne({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json(umNivel);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async createLevel(req, res) {
    const novoNivel = req.body;
    try {
      const novoNivelCriado = await database.Levels.create(novoNivel);
      return res.status(200).json(novoNivelCriado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updateLevel(req, res) {
    const { id } = req.params;
    const novasInfos = req.body;
    try {
      await database.Levels.update(novasInfos, { where: { id: Number(id) } });
      const nivelAtualizado = await database.Levels.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(nivelAtualizado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteLevel(req, res) {
    const { id } = req.params;
    try {
      await database.Levels.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ mensagem: `id ${id} deletado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

export default LevelsController;
