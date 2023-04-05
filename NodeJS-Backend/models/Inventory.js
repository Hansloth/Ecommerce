const mongoose = require('mongoose');
require("dotenv").config();

const conn = mongoose.createConnection(process.env.MONGO_URI_INVENTORY, {useNewUrlParser: true, useUnifiedTopology: true})
conn.model("item", require("../schema/inventorySchema"));

module.exports = conn.models.item;