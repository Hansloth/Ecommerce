const inventory = require("../data/phoneSpecifications.json");
const asyncWrapper = require("../middleware/async");
const Inventory = require("../models/Inventory");
const mongoose = require("mongoose");

const getAllInventory = asyncWrapper(async (req, res) => {
  const inventory = await Inventory.find({ invQty: { $gt: 0 } });
  res.status(200).json({ inventory: inventory });
});

//make a request to update, put
const updataInventoryDB = asyncWrapper(async (req, res) => {
  //req will be {id, quantity}
  const { id, qty } = req.body;
  var newQty = 0;
  await Inventory.find({ id: id })
    .then((result) => {
      const TargetQuantity = result[0].invQty; //gets the target inventory's quantity in db

      newQty = TargetQuantity - qty; //new quantity will be (target inventory's quantity in db) - the qty that this req wants to delete
      if (newQty < 0 || qty < 0) {
        return res
          .status(400)
          .json({ message: "Not valid quantity in db or request quantity" });
      } else {
        Inventory.updateOne(
          { id: id },
          {
            invQty: newQty,
          }
        )
          .then((result) => {
            res
              .status(201)
              .json({ message: "Successfully updated in database." });
          })
          .catch((err) => {
            console.log(err);
            res
              .status(500)
              .json({ message: "There is problem on the server side." });
          });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ message: "Couldn't find data" });
    });
});

const getSingleItem = asyncWrapper(async (req, res) => {
  // console.log("Inventory was called");
  const { id } = req.body;
  var phone = [];
  if (id) {
    phone = await Inventory.find({ id: String(id) });
  } else {
    return res.status(400).json({ message: "No id or model" });
  }

  if (phone.length == 0) {
    return res.status(204).json({ message: "Nothing found" });
  }

  res.status(200).json(phone);
});

module.exports = { getAllInventory, getSingleItem, updataInventoryDB };
