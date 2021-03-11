const router = require('express').Router();

const stocksController = require('../../controllers/stocksController');

router.route('/')
    .get(stocksController.findAll)
    .post(stocksController.create);


router.route('/:id')
    .get(stocksController.findById);

module.exports = router;