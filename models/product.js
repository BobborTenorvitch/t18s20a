const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productId: {
        type: String,
        required: true,
   
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

const Product = mongoose.model("Product",productSchema);
module.exports = Product;
