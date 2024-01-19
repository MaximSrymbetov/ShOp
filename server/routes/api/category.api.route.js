const router = require('express').Router();
const { Category, Product } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll();
    return res.status(200).json({ message: 'success' }, categories);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
});

router.get('/:id/products', async (req, res) => {
  const { id } = req.params;
  try {
    const products = await Product.findAll({ where: { category_id: id } });
    return res.status(200).json({ message: 'success' }, products);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
