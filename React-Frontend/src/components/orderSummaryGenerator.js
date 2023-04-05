import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

/**
 * Pass in an entire order object. This will create an html header for this order.
 * @param {*} props pass in the order that needs to be rendered
 * @returns html with Order date, order toal, who it was shipped to, and delivery date/estimate
 */
function GenerateInfoHeader(props) {
    const { order } = props;

    if (!(order.estimatedDeliveryDateMax)) {
        order.estimatedDeliveryDateMax = "10/02/2065";
        order.estimatedDeliveryDateMin = "10/02/2025";
    }

    let deliverDateMessage = `Delivery Estimate: ${order.estimatedDeliveryDateMin}-${order.estimatedDeliveryDateMax}`;
    if (order.estimatedDeliveryDateMax === order.estimatedDeliveryDateMin) {
        deliverDateMessage = "Delivered On: " + order.estimatedDeliveryDateMax;
    }


    return <>
        <div className="Order Header">
            <p>Order Placed on: Today (change later)</p>
            <p>Order Total: Total to be calculated</p>
            <p>Order Shipped to: {order.paymentFirstName} {order.paymentLastName}</p>
            <p>{deliverDateMessage}</p>
            <hr />
        </div>
    </>
}

/**
* Pass in a single order item and generate an html response for that item.
* @param {*} props single phone item
* @returns html with the phones image, name and price
*/
function GenereateItemInfo(props) {
    const { item } = props;

    return (
        <>
            <Card className="phone">
                <div className="card_img_container">
                    <Card.Img
                        variant="top"
                        style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "contain",
                            margin: "0.5rem",
                        }} img src={item.img} alt={item.model} />
                </div>
                <Card.Body>
                    <Card.Text>
                        <p>{item.brand} {item.model} : {item.count} @ {item.price}</p>
                    </Card.Text>

                </Card.Body>

            </Card>
        </>
    );
}

function GenerateInfoHeaderNew(props) {
    const { payment, shipping } = props;


    return <>
        <div className="Order Header">
            <section>
                <h3>Shipping address: {shipping.shippingFirstName} {shipping.shippingLastName} - {shipping.shippingAddressOne}, {shipping.shippingCity}, {shipping.shippingState}, {shipping.shippingZip}</h3>
            </section>
            <section>
                <h3>Payment Method: {payment.paymentFirstName} {payment.paymentLastName} - Card Number - {payment.paymentCardNum} &emsp; <br/>CVC - {payment.paymentCardCVC} &emsp; Expiration - {payment.paymentCardMonth}/{payment.paymentCardYear}</h3>
            </section>
        </div>
    </>
}
export { GenerateInfoHeader, GenereateItemInfo, GenerateInfoHeaderNew };