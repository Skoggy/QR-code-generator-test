const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stockSchema = new Schema({
    name: { type: String, required: true },
    value: { type: Number, required: true },
    amount: Number,
    minAmount: { type: Number, required: true }
});

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;