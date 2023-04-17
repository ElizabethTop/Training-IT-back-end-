const express = require('express')
const router = express.Router()
const { News } = require('../../models')
const authMiddlewares = require('../middlewares/auth.middlewares.js')

router.delete('/news/:id', /* authMiddlewares, */ async (req, res) => {
  try {
    const newsId = req.params.id

    const thisNews = await News.findOne({
      where: { id: newsId },
    })

    if (!thisNews) {
      return res.status(400).json('Новость не найдена')
    }

    await News.destroy({
      where: { id: newsId },
    })

    res.status(204).json('Новость успешно удалена')
  } catch (error) {
    console.log(error)
    res.status(400).json({
      success: false,
      message: 'Произошла ошибка при удалении новости',
    })
  }
})

module.exports = router
