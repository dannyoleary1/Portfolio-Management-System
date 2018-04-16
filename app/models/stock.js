// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our stock model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Stock', {
    description : {type : String, default: ''},
    location : {type: String, default: ''},
    symbol : {type: String, default: ''},
    dateIn: {type: String, default: ""}, //TODO change to date.
    quantity: {type: Number, default: 0},
    cost: {type: Number, default: 0.00},
    dateOut: {type: String, default: ""},
    purchasePrice: {type: Number, default: 0.00},
    price: {type: Number, default: 0.00},
    value: {type: Number, default: 0.00},
    gainOrLost: {type: Number, default: 0.00},
    percentGainOrLost: {type: String, default: ""},
    sellCosts: {type: Number, default: 0.00},
    _id: {type: Number, default: 0}
});