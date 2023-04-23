'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate(models) {}
  }
  Card.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      group: DataTypes.TEXT,
      head: DataTypes.TEXT,
      number: DataTypes.INTEGER,
      questions: DataTypes.JSON,
      links: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: 'Card',
    }
  )
  return Card
}
