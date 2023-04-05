//automatically add products.json objects to our database
require("dotenv").config();

const connectDB = require("../db/connect");
const productModel = require("../model/inventorySchema.js");

const jsonProducts = require("../data/phoneSpecifications.json");

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI);
        //delete items already in database
        await productModel.deleteMany();
        //add json into database
        await productModel.create(jsonProducts);
        console.log("Successfully populated product database");
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

start(); 