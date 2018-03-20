// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our stock model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Stock', {
    description : {type : String, default: ''},
    location : {type: String, default: ''},
    symbol : {type: String, default: ''},
    dateIn: {type: Date, default: Date.now}, //TODO change to date.
    quantity: {type: Number, default: 0},
    cost: {type: Number, default: 0}
});