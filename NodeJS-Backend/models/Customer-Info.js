const mongoose = require('mongoose');
require("dotenv").config();

const conn = mongoose.createConnection(process.env.MONGO_URI_CUSTOMER_INFO, {useNewUrlParser: true, useUnifiedTopology: true});
conn.model("order", require("../schema/orderSchema"));
conn.model("payment", require("../schema/paymentSchema"));
conn.model("shipping", require("../schema/shippingSchema"));

module.exports = conn.models;//.order, conn.models.payment, conn.models.shipping;