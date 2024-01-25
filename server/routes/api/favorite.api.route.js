const router = require('express').Router();
const { Favorite } = require('../../db/models');

router.post('/:productId/add', async (req, res) => {
  const user_id = res.locals.user.id;
  const product_id = req.params.productId;
  try {
    const favorite = await Favorite.create({ user_id, product_id });
    if (favorite) {
      return res.status(200).json({ message: 'success' });
    } else {
      return res.status(500).json({
        message: 'Не удалось добавить в избранное из-за серверной ошибки',
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
});

router.delete('/:productId/delete', async (req, res) => {
  const user_id = res.locals.user.id;
  const product_id = req.params.productId;
  try {
    const result = await Favorite.destroy({ where: { user_id, product_id } });
    if (result > 0) {
      return res.status(200).json({ message: 'success' });
    } else {
      return res.status(500).json({
        message: 'Не удалось убрать из избранного из-за серверной ошибки',
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
});



module.exports = router;
