const express = require('express')
const router = express.Router()
const { Card } = require('../../models')

router.get('/cards', async (req, res) => {
  try {
    const response = await Card.findAll()

    res.status(200).json(response)
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Произошла ошибка при получении списка карт',
    })
  }
})

module.exports = router