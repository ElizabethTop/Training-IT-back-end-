const express = require('express')
const router = express.Router()
const { Exam } = require('../../models')
const authMiddlewares = require('../middlewares/auth.middlewares.js')

router.post('/exam', authMiddlewares, async (req, res) => {
  try {
    const { userId, userData, cardId, cardHead, status } = req.body

    await Exam.create({
      userId,
      userData: JSON.stringify(userData),
      cardId,
      cardHead,
      status,
      passingExam: 0,
      dateExam: 0,
    })

    res.status(201).json('Экзамен успешно создан')
  } catch (error) {
    console.log(error)
    res.status(400).json({
      success: false,
      message: 'Произошла ошибка при создании экзамена',
    })
  }
})

module.exports = router
