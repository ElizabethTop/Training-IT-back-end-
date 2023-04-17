const express = require('express')
const router = express.Router()
const { User } = require('../../models')
const bcrypt = require('bcryptjs')
const tokenHelper = require('../service/token-helper')

router.post('/registration', async (req, res) => {
  try {
    const { login, password, firstName, lastName, role } = req.body
    const candidate = await User.findOne({ where: { login } })
    if (candidate) {
      return res
        .status(400)
        .json({ message: 'Пользователь с таким логином уже существует' })
    }

    const hashPasswor = bcrypt.hashSync(password, 6)
    const newUser = await User.create({
      login,
      password: hashPasswor,
      first_name: firstName,
      last_name: lastName,
      role,
    })

    const token = tokenHelper.generateAccessToken(newUser.id, newUser.login)

    res.status(201).json({
      token,
      userId: newUser.id,
      data: {
        firstName: newUser.first_name,
        lastName: newUser.last_name,
        login: newUser.login,
      },
      role: newUser.role,
    })
  } catch (error) {
    console.log(error)
    res.status(401).json({
      success: false,
      message: 'Произошла ошибка при регистрации',
    })
  }
})

module.exports = router
