const express = require('express')
const router = express.Router()
const { Article } = require('../../models')
const authMiddlewares = require('../middlewares/auth.middlewares.js')

router.delete(
  '/article/:id',
  /*  authMiddlewares,  */ async (req, res) => {
    try {
      const articleId = req.params.id

      const thisArticle = await Article.findOne({
        where: { id: articleId },
      })

      if (!thisArticle) {
        return res.status(400).json('Статья не найдена')
      }

      await Article.destroy({
        where: { id: articleId },
      })

      res.status(204).json('Статья успешно удалена')
    } catch (error) {
      console.log(error)
      res.status(400).json({
        success: false,
        message: 'Произошла ошибка при удалении статьи',
      })
    }
  }
)

module.exports = router
