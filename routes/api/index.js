const express = require('express');
const router = express.Router();
const userRoutes = require('./users')
const testRoutes = require('./test')

router.use('/test', testRoutes)
router.use('/users', userRoutes)

module.exports = router
