var express = require ("express");
var mongoose = require("mongoose");

var PORT = 3000;

var app = express();

app.use(express.urlencoded({extended: true}));

var dbconnnect = mongoose.connection;
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_UI || "mongodb://localhost/reactreadinglist");
//Start the API Server
app.listen(Port, function() {
    console.log('listening to port')
});