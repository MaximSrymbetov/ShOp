const router = require('express').Router();

const authAPIRouter = require('./api/auth.api.route');

router.use('/api/auth', authAPIRouter);

module.exports = router;
