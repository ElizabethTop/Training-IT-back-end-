const express = require('express')
const router = express.Router()
const { News } = require('../../models')
const authMiddlewares = require('../middlewares/auth.middlewares.js')

router.post(
  '/news',
  /* authMiddlewares, */ async (req, res) => {
    try {
      const { header, theme, description, additional, fileInfo, author } =
        req.body

      await News.create({
        header,
        theme,
        description,
        additional,
        fileInfo,
        author: JSON.stringify(author),
      })

      res.status(201).json('Новость успешно создана')
    } catch (error) {
      console.log(error)
      res.status(400).json({
        success: false,
        message: 'Произошла ошибка при создании новости',
      })
    }
  }
)

module.exports = router
