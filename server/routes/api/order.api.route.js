const router = require('express').Router();
const {
  Order,
  Order_item,
  User,
  Order_info,
  Product,
} = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [
        { model: Order_item, include:{model:Product}},
        { model: Order_info },
        { model: User },
      ],

      // include: { model: User }
      //  include: { model: Order_item },
    });
    console.log(orders, '!!!!!!!!!');
    return res.status(200).json({ message: 'success', orders });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
});

// router.get('/', async (req, res) => {
//   try {
//     const orders = await Order.findAll({
//       include: { model: Order_item, include: { model: Product } },
//     });
//     console.log(order);
//     return res.status(200).json(orders);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: error.message });
//   }
// });

module.exports = router;
