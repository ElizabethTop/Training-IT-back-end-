const express = require('express')
const router = express.Router()
const { Article } = require('../../models')
const authMiddlewares = require('../middlewares/auth.middlewares.js')

router.post('/article', authMiddlewares, async (req, res) => {
  try {
    const { group, article, text, links, author } = req.body

    await Article.create({
      group,
      article,
      text,
      links,
      author: JSON.stringify(author),
    })

    res.status(201).json('Статья успешно создана')
  } catch (error) {
    console.log(error)
    res.status(400).json({
      success: false,
      message: 'Произошла ошибка при создании статьи',
    })
  }
})

module.exports = router
