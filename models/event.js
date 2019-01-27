const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    date:{
        type:Date,
        required: true
    },
    locationn:{
        type:STRING,
        required: true
    },
    tickets:[{
        total:  Number,
        reserved: Number,
        price: Float
    }]
});
