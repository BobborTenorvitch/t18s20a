const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boardSchema = new Schema({
    // id: {
    //     type: Number,
    //     required: true
    // },
    topic:{
        type:String,
        required: true
    },
    comment:[{
        username: String,
        comment: String,
        date: Number
    }],
    createdAt:{
        type:Date,
        default:Date.now
    }
    
});

const Board = mongoose.model("Board",boardSchema);
module.exports = Board;