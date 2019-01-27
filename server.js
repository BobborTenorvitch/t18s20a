var express = require ("express");
var mongoose = require("mongoose");

var PORT = 3000;

var app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static("client"));


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_UI || "mongodb://localhost/reactreadinglist");

require('./routes/apiroutes.js')(app);
require('./routes/apiroutes.js')(app);

//Start the API Server
app.listen(Port, function() {
    console.log('listening to port'+PORT);
});