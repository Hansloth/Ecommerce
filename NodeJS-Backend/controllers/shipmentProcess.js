const asyncWrapper = require("../middleware/async");

//This microservice is owned by someone like UPS, DHL. It returns the shipping label to the vendor.
const startShipping = asyncWrapper(async(req, res)=>{
    //
    const {businessEntity, entityAccount, shippingInfo} = req.body;
    const shippingLabel = makeShippingLabel(8);
    console.log(">>>In shippipmentProcess, waiting for artificial delay to be over")
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
    await delay(5000) /// waiting n ms

    res.status(201).json({message:
        "Successfully initiate shipping process, the order is from " + businessEntity + 
        " ,the account number is entityAccount" + entityAccount + 
        " ,the shipping label is " + shippingLabel
        , shippingLabel});

});

function makeShippingLabel(length) {
    //creates random label as shipping label
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

module.exports = {startShipping}