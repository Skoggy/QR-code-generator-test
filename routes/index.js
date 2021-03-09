const { builtinModules } = require('module');
const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');

// Routes
router.use('/api', apiRoutes);

// If no API routes hit
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;