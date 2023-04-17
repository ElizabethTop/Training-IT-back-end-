'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    static associate(models) {}
  }
  Article.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      group: DataTypes.TEXT,
      article: DataTypes.TEXT,
      text: DataTypes.TEXT,
      links: DataTypes.TEXT,
      author: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Article',
    }
  )
  return Article
}
