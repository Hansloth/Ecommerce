const mongoose = require('mongoose');

const ShippingSchema = new mongoose.Schema({
    shippingFirstName: {
        type:String,
        required:[true, "Must provide a first name"]
    },
    shippingLastName: {
        type:String,
        required:[true, "Must provide a last name"]
    },
    shippingPhoneNumber:{
        type:String,
        required:[true, "Must provide phone number"]
    },
    shippingAddressOne:{
        type:String,
        required:[true, "Must provide adress"]
    },
    shippingAddressTwo:{
        type:String
    },
    shippingCity:{
        type:String,
        required:[true, "Must provide city"]
    },
    shippingState:{
        type:String,
        required:[true, "Must provide state"]
    },
    shippingZip:{
        type:String,
        required:[true, "Must provide zip code"]
    },
    shippingLabel:{
        type:String
    },
});

module.exports = ShippingSchema;
