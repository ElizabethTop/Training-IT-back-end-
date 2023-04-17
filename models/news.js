'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    static associate(models) {}
  }
  News.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      header: DataTypes.TEXT,
      theme: DataTypes.TEXT,
      description: DataTypes.TEXT,
      additional: DataTypes.TEXT,
      fileInfo: DataTypes.TEXT,
      author: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'News',
    }
  )
  return News
}
