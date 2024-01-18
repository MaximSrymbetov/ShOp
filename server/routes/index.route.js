const router = require('express').Router();

const authAPIRouter = require('./api/auth.api.route');
const productAPIRouter = require('./api/product.api.route');
const categoryAPIRouter = require('./api/category.api.route');
const favoriteAPIRouter = require('./api/favorite.api.route');

router.use('/api/auth', authAPIRouter);
router.use('/api/product', productAPIRouter);
router.use('/api/category', categoryAPIRouter);
router.use('/api/favorite', favoriteAPIRouter);

module.exports = router;
