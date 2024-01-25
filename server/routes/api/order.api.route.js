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

// изменение заказа
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

// получение ВСЕХ заказов
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

// добавление продукта в корзину
router.get('/:productid/add', async (req, res) => {
  const prod_id = req.params.productid;
  const user_id = res.locals.user.id;
  try {
    let order;
    order = await Order.findOne({
      where: { user_id, status: 'created' },
    });
    if (!order) {
      order = await Order.create({ user_id, delivery_status: false });
    }
    let order_item;
    order_item = await Order_item.findOne({
      where: { product_id: Number(prod_id), order_id: Number(order.id) },
    });
    if (!order_item) {
      order_item = await Order_item.create({
        product_id: Number(prod_id),
        order_id: Number(order.id),
        quantity: Number(1),
      });
    }

    const orderDB = await Order.findOne({
      where: { user_id, status: 'created' },
      include: [
        {
          model: Order_item,
          include: { model: Product, include: { model: Image } },
        },
        { model: Order_info },
        { model: User },
      ],
    });
    return res.status(200).json({ message: 'success', order: orderDB });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
});

// удаление продукта из корзины
router.delete('/:productid/delete', async (req, res) => {
  const prod_id = req.params.productid;
  const user_id = res.locals.user.id;
  try {
    const order = await Order.findOne({
      where: { user_id, status: 'created' },
    });
    const result = await Order_item.destroy({
      where: { product_id: Number(prod_id), order_id: Number(order.id) },
    });
    if (result > 0) {
      const orderDB = await Order.findOne({
        where: { user_id, status: 'created' },
        include: [
          {
            model: Order_item,
            include: { model: Product, include: { model: Image } },
          },
          { model: Order_info },
          { model: User },
        ],
      });
      return res
        .status(200)
        .json({ message: 'success', order: orderDB, product_id: prod_id });
    } else {
      return res.status(500).json({ message: error.message });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
