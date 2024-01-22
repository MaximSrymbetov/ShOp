const router = require('express').Router();
const { Product, Image } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({
      include: { model:  Image  },
    });
    console.log(products);
    return res.status(200).json(products);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
});

router.post('/add', async (req, res) => {
  const { categoryid, genderid, name, description, price } = req.body;
  try {
    const product = await Product.create({
      category_id:categoryid,
      gender_id:genderid,
      name,
      description,
      price,
    });
    return res.status(200).json({ message: 'success' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
});

router.put('/:id/update', async (req, res) => {
  const { id } = req.params;
  const { name, description, price, category_id, gender_id } = req.body;
  try {
    const result = await Product.update(
      {
        name,
        description,
        price,
        category_id,
        gender_id,
      },
      { where: { id } }
    );
    if (result.length > 0) {
      const product = await Product.findOne({ where: { id } });
      return res.status(200).json({ message: 'success' }, product);
    } else {
      return res.status(500).json({
        message: 'Не удалось обновить продукт из-за серверной ошибки',
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
});

router.delete('/:id/delete', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Product.destroy({ where: { id } });
    if (result > 0) {
      return res.status(200).json({ message: 'success' }, id);
    } else {
      return res.status(500).json({
        message: 'Не удалось удалить продукт из-за серверной ошибки',
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
});
module.exports = router;
