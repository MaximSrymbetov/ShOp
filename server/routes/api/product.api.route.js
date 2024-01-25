const router = require('express').Router();
const { Product, Image } = require('../../db/models');
const fileUpload = require('../../utils/fileUpload');
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
    console.log(req.body, '!!!!!!!!!!!!!!!');
    const file = req.files?.src;
    const arrproductid = await Promise.all(file.map((el) => fileUpload(el)));
    if (categoryid && genderid && name && description && price) {
      const product = await Product.create({
        category_id: categoryid,
        gender_id: genderid,
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

router.put('/update/:idProduct', async (req, res) => {
  try {
    const { idProduct } = req.params;
    const { description, name, price } = req.body;
    if (description && name && price) {
      const product = await Product.findOne({
        where: { id: idProduct },
        include: { model: Image },
      });
      if (product) {
        product.description = description;
        product.name = name;
        product.price = price;
        await product.save();
        res.status(200).json(product);
      } else {
        res.status(400).json({ message: 'Это не Ваше' });
      }
    } else {
      res.status(400).json({ message: 'Заполните все поля' });
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.delete('/:id/delete', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Product.destroy({ where: { id } });
    if (result > 0) {
      res.status(200).json({ message: 'success', id });
      return;
    }
    res.status(400).json({ message: 'Что-то пошло не так' });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});
module.exports = router;
