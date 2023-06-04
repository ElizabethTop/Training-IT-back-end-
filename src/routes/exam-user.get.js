const express = require('express')
const router = express.Router()
const { Exam } = require('../../models')
const authMiddlewares = require('../middlewares/auth.middlewares.js')

router.get('/examuser', authMiddlewares, async (req, res) => {
  try {
    const userId = res.locals.user.userId

    const { status } = req.body
    let response

    if (status && status === 'one') {
      response = await Exam.findOne({
        where: {
          userId,
        },
      })
    } else {
      response = await Exam.findAll({
        where: {
          userId,
        },
      })
    }

    res.status(200).json(response)
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Произошла ошибка при получении списка экзаменов',
    })
  }
})

module.exports = router
