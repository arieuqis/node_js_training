'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Persons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Persons.hasMany(models.Class, {
        foreignKey: 'professor_id'
      })
      Persons.hasMany(models.Registrations, {
        foreignKey: 'student_id'
      })
    }
  }
  Persons.init({
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Persons',
  });
  return Persons;
};