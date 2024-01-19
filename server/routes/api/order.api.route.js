const router = require('express').Router();
const { Order, Order_item, Product } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const order = await Order.findAll({
      where: { status: 'created' },
      include: { model: Order_item, include: { model: Product } },
    });
    console.log(order);
    return res.status(200).json({ message: 'success' }, order);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
