// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our stock model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('transactionHistory', {
    description : {type : String, default: ''},
    location : {type: String, default: ''},
    symbol : {type: String, default: ''},
    dateIn: {type: String, default: ""}, //TODO change to date.
    quantity: {type: Number, default: 0},
    dateOut: {type: String, default: ""},
    profitOrLoss: {type: Number, default: 0},
    _id: {type: Number, default: 0}
});