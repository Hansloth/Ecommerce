const express = require("express");
const router = express.Router();

const { getTest, createOrder } = require("../controllers/processOrder");
const { getAllInventory, getSingleItem, updataInventoryDB } = require("../controllers/inventory");
const { createProcessPayment } = require("../controllers/payment-processing-controller")
const {startShipping} = require("../controllers/shipmentProcess");

router.route("/processorder")
    .get(getTest)
    .post(createOrder);
router.route("/inventory")
    .get(getAllInventory)
    .put(updataInventoryDB);
router.route("/inventory/single")
    .get(getSingleItem);
router.route("/payment-processing")
    .post(createProcessPayment)
router.route("/ProcessShipment")
    .post(startShipping);


module.exports = router;
