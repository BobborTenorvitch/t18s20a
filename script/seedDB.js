const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bandsInTown",function(err){
    if(err){
        console.log("Mongoose connection error",err);
    }
    else {
        console.log("Mongoose connnection established")
    }
});
var date1 = new Date();
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

const eventSeed = [{ 
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
];

const storeSeed = [
    {
        productId:"Sunshine",
        category: "DVD",
        description: "Release on Sep 10 2018",
        item: {
            Quantity : 500,
            Available: true,
            price: 17
        }},
    {   productId:"Dream Land",
        category: "DVD",
        description: "Release on Aug 20 2018",
        item: {
            Quantity : 300,
            Available: true,
            price: 19
        }},
    {   productId:"Lost Town",
        category: "DVD",
        description: "Release on Feb 10 2017",
        item: {
            Quantity : 100,
            Available: true,
            price: 15
        }},
    {   productId:"Rainnbow",
        category: "DVD",
        description: "Release on Oct 10 2017",
        item: {
            Quantity : 54,
            Available: true,
            price: 15
        }},
    {   productId:"Lost Town",
        category: "DVD",
        description: "Release on Dec 10 2015",
        item: {
            Quantity : 110,
            Available: true,
            price: 15
        }},
    {
        productId:"Fantastic",
        category: "DVD",
        description: "Release on Mar 10 2016",
        item: {
            Quantity : 170,
            Available: true,
            price: 15
        }
    },
    {
        productId:"Grand days",
        category: "DVD",
        description: "Release on Feb 19 2015",
        item: {
            Quantity : 120,
            Available: true,
            price: 15
        },
    },
    {
        productId:"Yeeterson",
        category: "POSTER",
        description: "Dimensions 25.7 cm * 37.8cm",
        item: {
            Quantity : 700,
            Available: true,
            price: 20
        },
    },
    {
        productId:"Lost Town - Poster",
        category: "POSTER",
        description: "Dimensions 10.1 in * 14.9 in",
        item: {
            Quantity : 90,
            Available: true,
            price: 20
        },
    },
    {
        productId:"Grand days - Poster",
        category: "POSTER",
        description: "Dimension 2'5 * 3'0' ",
        item: {
            Quantity : 120,
            Available: true,
            price: 12
        },
    },
    {
        productId:"Fantastic - Poster",
        category: "POSTER",
        description: "Dimension 816 m * 926 m",
        item: {
            Quantity : 96,
            Available: true,
            price: 11
        },
    },
    {
            productId:"Sunshine - Poster",
            category: "POSTER",
            description: "Dimensions 2' 5' * 3' 0' ",
            item: {
                Quantity : 50,
                Available: true,
                price: 15
            }
    }
]

const boardSeed = [
    {
        topic: "Performance at California",
        comment:[
            {
                username: "jasmine",
                comment:"Been waiting for long",
                date: new Date('06 05 2018')
            },
            {
            username: "jasrose",
            comment:"Heard that there is going to be a show in 2020",
            date: new Date('06 06 2018')
            },
            {
                username: "jasmine",
                comment:"Where in California?",
                date: new Date('06 06 2018')
            },
            {
                username: "jasrose",
                comment:"I think San Fransisco",
                date: new Date('06 07 2018')
            }
        ]
    },
    {
        topic: "Grand Days is my favorite Album",
        comment:[
            {
                username: "jkrd",
                comment:"Yes mine too. Tried to buy it but always low in stock",
                date: new Date('06 05 2018')
            },
            {
            username: "qwsk",
            comment:"I just ordered, it is in stock",
            date: new Date('06 06 2018')
            }
        ]
    },
]
db.Event.deleteMany({})
   .then(() => {
       console.log("event collections removed");
       try{
        db.Event.collection.bulkWrite(eventSeed)
       }
       catch(err){
        console.log("Error in Inserting - Event",err);
       }
       
   }).then(() => {
       db.Store.deleteMany({})
   }).then( () => {
       console.log("Store - Collections removed")
       try{
        db.Store.collection.bulkWrite(storeSeed)
       }
       catch(err){
           console.log("Error in innsertingn - store",err);
       }
        
   }).then(data => {
        console.log(data,"New records inserted in Store");
   }).then(() => {
       db.Board.deleteMany({})
   }).then(() => {
       console.log("Board collection resmoeved");
       try{
        db.Board.collection.bulkWrite(boardSeed)
       }
       catch(err){
           console.log("Error in Inserting - Board",err);
       }
       
    }).then(data => {
       console.log(data, "Records inserted in Board");
       process.exit(0);
   }).catch(err => {
       console.log("Error",err);
       process.exit(1);

   });




