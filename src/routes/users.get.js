const express = require('express')
const router = express.Router()
const { User } = require('../../models')

router.get('/users', async (req, res) => {
  try {
    const response = await User.findAll()

    res.status(200).json(response)
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Произошла ошибка при получении списка пользователей',
    })
  }
})

module.exports = router
