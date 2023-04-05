const axios = require("axios");

//Make a call to inventory/single api
async function AxiosGETSingle(id) {
    let response = await axios({
        method: "get",
        url: "http://localhost:5000/inventory/single",
        data: {
            "id": id
        },
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
    }).then((reply) => {
        return { invQty: reply.data[0].invQty };
    }).catch((err) => {
        return { err: err.response };
    });
    return response;
};

async function AxiosPUTUpdateCount(id, qty) {
    let response = await axios({
        method: "put",
        url: "http://localhost:5000/inventory",
        data: {
            "id": id,
            "qty": qty
        },
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
    }).then((reply) => {
        return reply.status;
    }).catch((err) => {
        return err.response.status;
    });
    return response;
};

async function AxiosPOSTPaymentProcessing(payment) {
    let response = await axios({
        method: "post",
        url: "http://localhost:5000/payment-processing",
        data: {
            "payment": payment,
            "businessEntity":"EShop",
            "entityAccount" : "EShop@gmail.com"
        },
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
    }).then((reply) => {
        payment.bankConfirmationNumber = reply.data.confirmationNumber
        return reply.status;
    }).catch((err) => {
        return err.response.status;
    });
    return response
};

async function AxiosPostStartShipping( shippingInfo) {
    let response = await axios({
        method: "post",
        url: "http://localhost:5000/ProcessShipment",
        data: {
            "businessEntity": "EShop",
            "businessAccount": "Eshop@gmail.com",
            "shippingInfo": shippingInfo
        },
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
    }).then((reply) => {
        return reply;
    }).catch((err) => {
        return err.response;
    });
    return response;
};

module.exports = {AxiosGETSingle, AxiosPUTUpdateCount, AxiosPOSTPaymentProcessing, AxiosPostStartShipping};
