const router = require('express').Router();
const {
  Order,
  Order_item,
  User,
  Order_info,
  Product,
  Image,
} = require('../../db/models');

// router.delete('/:id/destroy', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const result = await Product.destroy({ where: { id } });
//     if (result > 0) {
//       res.status(200).json({ message: 'success', id });
//       return;
//     }
//     res.status(400).json({ message: 'Что-то пошло не так' });
//   } catch ({ message }) {
//     res.status(500).json({ message });
//   }
// });

router.put('/update/:id', async (req, res) => {
  const { id } = req.params;
  const { status, total } = req.body;
  try {
    const result = await Order.update({ status, total }, { where: { id } });
    if (result.length > 0) {
      const order = await Order.findOne({
        where: { id },
        include: [
          {
            model: Order_item,
            include: { model: Product, include: { model: Image } },
          },
          { model: Order_info },
          { model: User },
        ],
      });
      res.status(200).json({ message: 'success', order });
      return;
    }

    res.status(400).json({ message: 'disaster' });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.get('/', async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [
        {
          model: Order_item,
          include: { model: Product, include: { model: Image } },
        },
        { model: Order_info },
        { model: User },
      ],
    });
    return res.status(200).json({ message: 'success', orders });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
