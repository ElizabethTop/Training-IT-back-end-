const express = require('express')
const router = express.Router()
const { User } = require('../../models')
const bcrypt = require('bcryptjs')
const tokenHelper = require('../service/token-helper')

router.post('/login', async (req, res) => {
  try {
    const { login, password } = req.body
    const user = await User.findOne({ where: { login } })
    if (!user) {
      return res.status(404).json({ message: 'Пользователь не найден' })
    }

    const validPassword = bcrypt.compareSync(password, user.password)
    if (!validPassword) {
      return res.status(401).json({ message: 'Неверный пароль' })
    }

    const token = tokenHelper.generateAccessToken(user.id, user.login)

    res.status(200).json({
      token,
      userId: user.id,
      data: {
        firstName: user.first_name,
        lastName: user.last_name,
        login: user.login,
      },
      role: user.role,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Произошла ошибка при входе',
    })
  }
})

module.exports = router
