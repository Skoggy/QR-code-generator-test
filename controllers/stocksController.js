const db = require('../models');

// Get all and get individual stocks
module.exports = {
    findAll: function (req, res) {
        db.Stock
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    findById: function (req, res) {
        db.Stock
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }

}