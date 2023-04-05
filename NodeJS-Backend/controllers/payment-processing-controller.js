const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.json());

const createProcessPayment = async (req, res) => {    
    // console.log(req.body)   
    res.status(201).json({msg:"Payment Accepted", confirmationNumber:"987654321" })
}

module.exports = {createProcessPayment}