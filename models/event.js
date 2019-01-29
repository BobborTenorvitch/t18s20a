const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const stypes = mongoose.Schema.Types;

const eventSchema = new Schema({
    // id: {
    //     type: Number,
    //     required: true
    // },
    date:{
        type:Date,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    tickets:{
        total:  Number,
        reserved: Number,
        price: Number
    },
    createdAt : {
        type:Date,
        default: Date.now
    }
});

const Event = mongoose.model("Event",eventSchema);
module.exports = Event;
