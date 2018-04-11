// app/routes.js

// grab the nerd model we just created
var Nerd = require('./models/nerd');
var Stock = require('./models/stock');

module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    app.get('/api/nerds', function(req, res) {
        // use mongoose to get all nerds in the database
        Nerd.find(function(err, nerds) {

            // if there is an error retrieving, send the error.
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(nerds); // return all nerds in JSON format
        });
    });

    app.get('/api/stocks', function(req, res){
        //use mongoose to get all stocks in the database
        Stock.find(function(err, stocks){
            if (err)
                res.send(err);

            res.json(stocks);
        });
    });

    app.delete('/api/stocks', function (req, res) {
        Stock.remove(function (err, stocks) {
            console.log(stocks)
            if (err)
                res.send(err);
            res.json("Deleted!")
        });
    });

    app.post('/api/stocks', function(req, res){
        var stock = new Stock();
        stock.description = req.body.description
        stock.location = req.body.location
        stock.symbol = req.body.symbol
        stock.dateIn = req.body.dateIn
        stock.quantity = req.body.quantity
        stock.cost = req.body.cost
        stock.dateOut = req.body.dateOut
        stock.purchasePrice = req.body.purchasePrice
        stock.price = req.body.price
        stock.value = req.body.value
        stock.gainOrLost = req.body.gainOrLost
        stock.percentGainOrLost = req.body.percentGainOrLost
        stock.sellCosts = req.body.sellCosts

        stock.save(function (err) {
            if (err)
                res.send(err);
            res.json({message: 'Stock Created!'});
        });
    });

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html'); // load our public/index.html file
    });

};
