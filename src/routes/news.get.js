const express = require('express')
const router = express.Router()
const { News } = require('../../models')

router.get('/news', async (req, res) => {
  try {
    const response = await News.findAll()

    res.status(200).json(response)
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Произошла ошибка при получении списка новостей',
    })
  }
})

module.exports = router
