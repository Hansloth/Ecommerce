//database stuff

const mongoose = require('mongoose');

//these two are the only data fields that can be passed into the database
//doing it this way has no validation, for more options use the next one
// const TaskSchema = new mongoose.Schema({
//     name:String, 
//     completed:Boolean
// });

const InventorySchema = new mongoose.Schema({
    id : {
        type:String,
        required:[true, "Must provide id"], //you can pass it as just true, then you wouldn't get the custom message
    },

    img: {
        type:String,
    },

    brand: {
        type:String,
        required:[true, "Must provide brand"], //you can pass it as just true, then you wouldn't get the custom message
        maxLength:[20, "brand cannot exceed 20 characters"],
    },

    model: {
        type:String,
        required:[true, "Must provide model"], //you can pass it as just true, then you wouldn't get the custom message
        maxLength:[20, "model cannot exceed 20 characters"],
    },

    price: {
        type:String,
        required:[true, "Must provide id"], //you can pass it as just true, then you wouldn't get the custom message
    },

    memorySize: {
        type:String,
        required:[true, "Must provide memorySize"], //you can pass it as just true, then you wouldn't get the custom message
        maxLength:[20, "memorySize cannot exceed 20 characters"],
    },

    screenSize: {
        type:String,
        required:[true, "Must provide screenSize"], //you can pass it as just true, then you wouldn't get the custom message
        maxLength:[20, "screenSize cannot exceed 20 characters"],
    },

    color: {
        type:String,
        required:[true, "Must provide color"], //you can pass it as just true, then you wouldn't get the custom message
        maxLength:[20, "color cannot exceed 20 characters"],
    },

    condition: {
        type:String,
        required:[true, "Must provide condition"], //you can pass it as just true, then you wouldn't get the custom message
        maxLength:[20, "condition cannot exceed 20 characters"],
    },

    invQty: {
        type:Number,
        required:[true, "Must provide invQty"], //you can pass it as just true, then you wouldn't get the custom message
        min: [0,"Inventory quantity should be greater or quale to zero"]
    }



});

module.exports = InventorySchema;
