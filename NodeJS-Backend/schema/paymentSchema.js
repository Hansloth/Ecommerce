const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    paymentFirstName: {
        type:String,
        required:[true, "Must provide a first name"]
    },
    paymentLastName: {
        type:String,
        required:[true, "Must provide a last name"]
    },
    paymentCardNum:{
        type:String,
        required:[true, "Must provide card num"]
    },
    paymentCardCVC:{
        type:String,
        required:[true, "Must provide CVC"]
    },
    paymentCardYear:{
        type:String,
        required:[true, "Must provide expiration year"]
    },
    paymentCardMonth:{
        type:String,
        required:[true, "Must provide expiration month"]
    },
    bankConfirmationNumber:{
        type:String,
        required:[true, "Must provide bank confirmation refrence"]
    },
});

module.exports = PaymentSchema;
