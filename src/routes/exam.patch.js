const express = require('express')
const router = express.Router()
const { Exam } = require('../../models')
const authMiddlewares = require('../middlewares/auth.middlewares.js')

router.patch('/exam/:id', authMiddlewares, async (req, res) => {
  try {
    const examId = req.params.id
    const { status, passingExam } = req.body

    await Exam.update(
      {
        status,
        passingExam,
      },
      { where: { id: examId } }
    )

    res.status(201).json('Информация об экзамене успешно обновлена')
  } catch (error) {
    console.log(error)
    res.status(400).json({
      success: false,
      message: 'Ошибка обновления информации об экзамене :(',
    })
  }
})

module.exports = router
