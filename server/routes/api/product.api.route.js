const router = require('express').Router();
const { Product, Image } = require('../../db/models');
const fileUpload = require('../../fileupload')
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({
      include: { model: Image },
    });
    return res.status(200).json(products);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
});

router.post('/add', async (req, res) => {
  try {
    const { categoryid, genderid, name, description, price } = req.body;
    console.log(req.body,'!!!!!!!!!!!!!!!');
    const file = req.files?.src
    const arrproductid = await Promise.all(file.map((el) => fileUpload(el)));
    if (categoryid && genderid && name && description && price) {
      const product = await Product.create({
        category_id:categoryid,
        gender_id:genderid,
        name,
        description,
        price,
      });
      await Promise.all(
        arrproductid.map((el) =>
          Image.create({
            src: el,
            product_id: product.id,
          })
        )
      );
      const newProduct = await Product.findOne({
        where: { id: product.id },
        include: { model: Image },
      });

      res.status(201).json(newProduct);
    } else {
      res.status(400).json({ message: 'Заполните все поля' });
    }
  } catch ({ message }) {
    console.log(message);
    res.status(500).json({ message });
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
