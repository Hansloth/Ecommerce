const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    orderTotal: {
        type:String,
        required:[true, "Must provide an order total"]
    },
    orderPlacedOn: {
        type:String,
        required:[true, "Must provide date"]
    },
    items: [{
        id:String,
        qty:String
    }],
    payment:{
        type:String,
        required:[true, "Must provide payment refrence"]
    },
    shipping:{
        type:String,
        required:[true, "Must provide payment refrence"]
    },
    shipping:{
        type:Boolean,
        default: false
    }
});

module.exports = OrderSchema;
