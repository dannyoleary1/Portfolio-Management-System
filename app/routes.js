// app/routes.js

// grab the nerd model we just created
var Stock = require('./models/stock');
var transactionHistory = require('./models/transactionHistory');

module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    app.get('/api/stocks', function(req, res){
        //use mongoose to get all stocks in the database
        Stock.find(function(err, stocks){
            if (err)
                res.send(err);

            res.json(stocks);
        });
    });

    app.get('/api/transactionHistory', function (req, res) {
        transactionHistory.find(function (err, transactions) {
            if (err)
                res.send(err);
            res.json(transactions);
        })
    });

    app.delete('/api/stocks/:id', function (req, res) {
        var id = req.params.id;
        Stock.findByIdAndRemove(id, function (err, stocks){
            console.log("inside remove")
                if (err)
                    res.send(err)
                res.json("Deleted!")

        })
    });

    app.put('/api/stocks/:id', function (req, res) {
        var id = req.params.id;
        Stock.findByIdAndUpdate(id, {$set:req.body}, function(err, stock){
            if (err)
                console.log(err)
            res.json({message: 'Stock Updated!'});
        });
    });

    app.get('/api/stocks/:id', function (req, res) {

        var id = req.params.id
        Stock.find({_id:id}, function (err, stock){
            if (err)
                res.send(err)
            res.send(stock)
        })
    });

    app.delete('/api/stocks', function (req, res) {
        console.log("in reg delete");
        Stock.remove(function (err, stocks) {
            console.log(stocks)
            if (err)
                res.send(err);
            res.json("Deleted!")
        });
    });

    app.delete('/api/transactionHistory', function (req, res) {
        transactionHistory.remove(function (err, transactions) {
            if (err)
                res.send(err);
            res.json("Deleted!");
        })
    })

    app.post('/api/transactionHistory', function (req, res) {
        console.log("inside post");
        var transaction = new transactionHistory();
        transaction.description = req.body.description;
        transaction.location = req.body.location;
        transaction.symbol = req.body.symbol;
        transaction.dateIn = req.body.dateIn;
        transaction.quantity = req.body.quantity;
        transaction.dateOut = req.body.dateOut;
        transaction.profitOrLoss = req.body.profitOrLoss;
        transaction._id = req.body._id;
        transaction.save(function (err) {
            if (err)
                res.send(err);
            res.json({message: 'Transaction Created!'});
        });
    });

    app.post('/api/stocks', function(req, res){
        var stock = new Stock();
        stock.description = req.body.description;
        stock.location = req.body.location;
        stock.symbol = req.body.symbol;
        stock.dateIn = req.body.dateIn;
        stock.quantity = req.body.quantity;
        stock.cost = req.body.cost;
        stock.dateOut = req.body.dateOut;
        stock.purchasePrice = req.body.purchasePrice;
        stock.price = req.body.price;
        stock.value = req.body.value;
        stock.gainOrLost = req.body.gainOrLost;
        stock.percentGainOrLost = req.body.percentGainOrLost;
        stock.sellCosts = req.body.sellCosts;
        stock._id = req.body._id;

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
