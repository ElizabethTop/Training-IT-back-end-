const express = require('express')
const router = express.Router()
const { Card } = require('../../models')
const authMiddlewares = require('../middlewares/auth.middlewares.js')

router.post('/card', authMiddlewares, async (req, res) => {
  try {
    const { group, head, number, questions, links } = req.body

    await Card.create({
      group,
      head,
      number,
      questions: JSON.stringify(questions),
      links: JSON.stringify(links),
    })

    res.status(201).json('Карта успешно создана')
  } catch (error) {
    console.log(error)
    res.status(400).json({
      success: false,
      message: 'Произошла ошибка при создании карты',
    })
  }
})

module.exports = router
