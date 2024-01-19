const router = require('express').Router();

const authAPIRouter = require('./api/auth.api.route');
const productAPIRouter = require('./api/product.api.route');
const categoryAPIRouter = require('./api/category.api.route');
const genderAPIRouter = require('./api/gender.api.route');
const favoriteAPIRouter = require('./api/favorite.api.route');
const orderAPIRouter = require('./api/order.api.route');
const reviewAPIRouter = require('./api/review.api.route');

router.use('/api/auth', authAPIRouter);
router.use('/api/product', productAPIRouter);
router.use('/api/category', categoryAPIRouter);
router.use('/api/gender', genderAPIRouter);
router.use('/api/favorite', favoriteAPIRouter);
router.use('/api/order', orderAPIRouter);
router.use('/api/review', reviewAPIRouter);

module.exports = router;
