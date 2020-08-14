const express = require('express');
const pino = require('express-pino-logger')();
const mongoose = require('mongoose');
const cors = require('cors');
const Trade = require('../models/trade');

const app = express();
app.use(cors()); // all routes can use it
const mongodb_uri = process.env.MONGODB_URI;
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(pino);

// // enable CORS (https://enable-cors.org/server_expressjs.html)
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "localhost:3001"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

// set up mongoose
mongoose.connect(mongodb_uri, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongodb is connected');
}); 

// routes
// show all trades
app.get('/trades', (req, res) => {
    console.log('hit the get all trades route  - /trades');
    Trade.find({}, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.json({
                data
            });
        }
    });
});

// show routes - to show a trade
app.get('/trades/:id', (req, res) => {
    console.log('hit the get a trade route - /trades/:id');
    // console.log('req.params.id: ',req.params.id);
    Trade.findById(req.params.id, (err, trade) => {
        if (err) {
            console.log(err);
        } else {
            res.json({
                trade
            });
        }
    });
});

// post route - to post a trade
app.post('/trades', (req, res) => {
    // console.log('hit the post route - /trades');
    // console.log('req.body:', req.body.inputData);
    Trade.create(req.body.data.inputData, (err, Trade) => {
        if (err) {
            console.log(err);
        } else {
            console.log('created a Trade in db:', Trade);
        }
    });
});

// edit route - to edit a trade
app.put('/trades/:id', (req,res) => {
    console.log('hit the update route');
    console.log('req.boby.data.editData', req.body.data.editData);
    // console.log('req.params', req.params);
    Trade.findByIdAndUpdate(req.params.id, req.body.data.editData, (err, trade) => {
        if (err) {
            console.log(err);
        } else {
            console.log('updated trade in db:', trade);
        }
    })
});

// delete route - to delete a trade
app.delete('/trades/:id', (req, res) => {
    console.log('hit the delete route');
    // console.log('req.body', req.body.tradeData);

    Trade.findByIdAndDelete(req.body.tradeData._id, (err, trade) => {
        if (err) {
            console.log(err);
        } else {
            console.log('deleted trade from db:', trade);
        }
    })
});

app.listen(3001, () => {
    console.log('express is running on localhost:3001');
});