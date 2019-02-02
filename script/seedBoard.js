const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bandsInTown", function (err) {
    if (err) {
        console.log("Mongoose connection error", err);
    }
    else {
        console.log("Mongoose connection established")
    }
});
const boardSeed = [
    {
        topic: "Performance at California",
        comment: [
            {
                username: "jasmine",
                comment: "Been waiting for long",
                date: new Date('06 05 2018')
            },
            {
                username: "jasrose",
                comment: "Heard that there is going to be a show in 2020",
                date: new Date('06 06 2018')
            },
            {
                username: "jasmine",
                comment: "Where in California?",
                date: new Date('06 06 2018')
            },
            {
                username: "jasrose",
                comment: "I think San Fransisco",
                date: new Date('06 07 2018')
            }
        ]
    }
    ,
    {
        topic: "Grand Days is my favorite Album",
        comment: [
            {
                username: "jkrd",
                comment: "Yes mine too. Tried to buy it but always low in stock",
                date: new Date('06 05 2018')
            },
            {
                username: "qwsk",
                comment: "I just ordered, it is in stock",
                date: new Date('06 06 2018')
            }
        ]
    },
]
db.Board
    .deleteMany({})
    .then(() =>
  
        db.Board.collection.insertMany(boardSeed)
    )
    .then(data => {
        console.log(data, "Records inserted in Board");
        process.exit(0);
    }).catch(err => {
        console.log("Error", err);
        process.exit(1);

});
