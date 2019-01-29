var express = require ("express");
var mongoose = require("mongoose");

var PORT = 8080;

var app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static("client"));


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_UI || "mongodb://localhost/reactreadinglist",function(err,results){
    if (err) throw err;
     console.log("Mongoose Connected");
    insertRecords();
});

require('./routes/apiroutes.js')(app);
require('./routes/apiroutes.js')(app);

function insertRecords(){
   var date1 =  new Date();
   var date2 = new Date();
   var date3 =  new Date();
   var date4 = new Date();
   var date5 =  new Date();
   var date6 = new Date();
   var date7 =  new Date();
   var date8 = new Date();
   var date9 =  new Date();
   var date10 = new Date();
   date2.setDate(date1.getDate()+7);
   date3.setDate(date1.getDate()+14);
   date4.setDate(date1.getDate()+30);
   date5.setDate(date1.getDate()+50);
   date6.setDate(date1.getDate()+61);
   date7.setDate(date1.getDate()+77);
   date8.setDate(date1.getDate()+87);
   date8.setDate(date1.getDate()+98);
   date9.setDate(date1.getDate()+107);
   date10.setDate(date1.getDate()+137);
   var records =  [{
    date : date1,
    location: "Venice, Italy",
    tickets:{
        total:500,
        reserved: 400,
        price: 23.55
    }},
    {
        date : date1,
        location: "Venice, Italy",
        tickets:{
            total:500,
            reserved: 400,
            price: 53.55
    }},
    {
        date : date2,
        location: "Paris, London",
        tickets:{
            total:100,
            reserved: 80,
            price: 93.85
    }},
    {
        date : date3,
        location: "Bethnal Green, London",
        tickets:{
            total:1000,
            reserved: 800,
            price: 73.95
    }},
    {
        date : date4,
        location: "Birmingham, Britain",
        tickets:{
            total:300,
            reserved: 10,
            price: 113.85
    }},
    {
        date : date5,
        location: "Liverpool, Britain",
        tickets:{
            total:30000,
            reserved: 290,
            price: 313.85
    }},
    {
        date : date6,
        location: "Sheffield, Britain",
        tickets:{
            total:1000,
            reserved: 10,
            price: 113.85
    }},
    {
        date : date6,
        location: "Manchester, England",
        tickets:{
            total:100000,
            reserved: 10000,
            price: 513.85
    }},
    {
        date : date7,
        location: "Sheffield, Britain",
        tickets:{
            total:1000,
            reserved: 10,
            price: 113.85
    }},
    {
        date : date8,
        location: "New York, US",
        tickets:{
            total:1000,
            reserved: 10,
            price: 113.85
    }},
    {
        date : date9,
        location: "York, England",
        tickets:{
            total:10,
            reserved: 9,
            price: 10000113
    }},
    {
        date : date10,
        location: "Venice, Italy",
        tickets:{
            total:500,
            reserved: 400,
            price: 23.55
    }}    

   ]
}
  
//Start the API Server
app.listen(PORT, function() {
    console.log('listening to port'+PORT);
});