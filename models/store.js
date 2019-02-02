const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storeSchema = new Schema({
    productId: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true,
    },
    description:{
        type:String,
        required: true
    },
    item:{
        Quantity:  Number,
        Avaliable: Boolean,
        price:  Number

    }
});

const Store = mongoose.model("Store",storeSchema);
module.exports = Store;
