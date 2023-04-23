const express = require('express')
const router = express.Router()
const { Card } = require('../../models')
const authMiddlewares = require('../middlewares/auth.middlewares.js')

router.delete('/card/:id', authMiddlewares, async (req, res) => {
  try {
    const cardId = req.params.id

    const thisCard = await Card.findOne({
      where: { id: cardId },
    })

    if (!thisCard) {
      return res.status(400).json('Карта не найдена')
    }

    await Card.destroy({
      where: { id: cardId },
    })

    res.status(204).json('Карта успешно удалена')
  } catch (error) {
    console.log(error)
    res.status(400).json({
      success: false,
      message: 'Произошла ошибка при удалении карты',
    })
  }
})

module.exports = router
