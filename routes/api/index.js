const router = require('express').Router();
const stockRoutes = require('./stocks');

// Stock Routes
router.use('/stocks', stockRoutes);

module.exports = router;