const router = require('express').Router();
const { builtinModules } = require('module');
const stocksController = require('../../controllers/stocksController');

router.route('/')
    .get(stocksController.findAll);


router.route('/:id')
    .get(stocksController.findById);

module.exports = router;