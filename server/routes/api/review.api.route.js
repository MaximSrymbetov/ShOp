const router = require('express').Router();
const { Review } = require('../../db/models');

router.get('/:productId/product', async (req, res) => {
  const product_id = req.params.productId;
  try {
    const reviews = await Review.findAll({
      where: { product_id },
    });
    return res.status(200).json({ message: 'success' }, reviews);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
});

router.post('/:productId/product', async (req, res) => {
  const user_id = res.locals.user.id;
  const product_id = req.params.productId;
  const { text } = req.body;
  try {
    const existReview = await Review.findAll({
      where: { user_id, product_id },
    });
    if (existReview) {
      return res
        .status(400)
        .json({ message: 'Вы уже оставляли отзыв на этот товар' });
    }
    const review = await Review.create({ user_id, product_id, text });
    if (review) {
      return res.status(200).json({ message: 'success' }, review);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
