'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Exam extends Model {
    static associate(models) {}
  }
  Exam.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      userId: DataTypes.UUID,
      userData: DataTypes.JSON,
      cardId: DataTypes.UUID,
      cardHead: DataTypes.TEXT,
      status: DataTypes.TEXT,
      passingExam: DataTypes.INTEGER,
      dateExam: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Exam',
    }
  )
  return Exam
}
