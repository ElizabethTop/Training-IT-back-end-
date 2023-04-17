const express = require('express')
const router = express.Router()
const { Article } = require('../../models')

router.get('/articles', async (req, res) => {
  try {
    const response = await Article.findAll()

    res.status(200).json(response)
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Произошла ошибка при получении списка статей',
    })
  }
})

module.exports = router
