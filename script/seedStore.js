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

    {   productId:"Lost Town",
        category: "DVD",
        description: "Release on Feb 10 2017",
        item: {
            Quantity : 100,
            Available: true,
            price: 15
        }},
    {   productId:"Rainbow",
        category: "DVD",
        description: "Release on Oct 10 2017",
        item: {
            Quantity : 54,
            Available: true,
            price: 15
        }},
    {   productId:"Mystic Town",
        category: "DVD",
        description: "Release on Dec 10 2015",
        item: {
            Quantity : 110,
            Available: true,
            price: 15
        }},
    {
        productId:"Fantastic4",
        category: "DVD",
        description: "Release on Mar 10 2016",
        item: {
            Quantity : 170,
            Available: true,
            price: 15
        }
    },
    {
        productId:"100 Grand days",
        category: "DVD",
        description: "Release on Feb 19 2015",
        item: {
            Quantity : 120,
            Available: true,
            price: 15
        },
    },
    {
        productId:"Yeeterson Originals",
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
            productId:"Sunshine! - Poster",
            category: "POSTER",
            description: "Dimensions 2' 5' * 3' 0' ",
            item: {
                Quantity : 50,
                Available: true,
                price: 15
            }
    }
]

db.Store.remove({})
   .then( () => 
        db.Store.collection.insertMany(storeSeed)
    ).then((data) => {
        console.log(data,"New records inserted in Store");
        process.exit(0);
    }).catch(err => {
        console.log("Error",err);
        process.exit(1);

    });