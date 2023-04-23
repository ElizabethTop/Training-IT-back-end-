const express = require('express')
const router = express.Router()
const { Exam } = require('../../models')

router.get('/exams', async (req, res) => {
  try {
    const response = await Exam.findAll()

    res.status(200).json(response)
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Произошла ошибка при получении списка экзаменов',
    })
  }
})

module.exports = router
