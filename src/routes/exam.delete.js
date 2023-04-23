const express = require('express')
const router = express.Router()
const { Exam } = require('../../models')
const authMiddlewares = require('../middlewares/auth.middlewares.js')

router.delete('/exam/:id', authMiddlewares, async (req, res) => {
  try {
    const examId = req.params.id

    const thisExam = await Exam.findOne({
      where: { id: examId },
    })

    if (!thisExam) {
      return res.status(400).json('Экзамен не найден')
    }

    await Exam.destroy({
      where: { id: examId },
    })

    res.status(204).json('Экзамен успешно удален')
  } catch (error) {
    console.log(error)
    res.status(400).json({
      success: false,
      message: 'Произошла ошибка при удалении экзамена',
    })
  }
})

module.exports = router
