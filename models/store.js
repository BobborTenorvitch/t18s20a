const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storeSchema = new Schema({
    // id: {
    //     type: Number,
    //     required: true
    // },
    category: {
        type: String,
        required: true,
    },
    description:{
        type:STRING,
        required: true
    },
    item:{
        Quantity:  Number,
        Avaliable: boolean,
        price: Float
    }
});

const Store = mongoose.model("Store",storeSchema);
module.exports = Store;
