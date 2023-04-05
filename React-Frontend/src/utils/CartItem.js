import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";

const CartItem = (props) => {
  const { phoneItem, deleteFromCart } = props;
  return (
    <article className="phone">
      <Card className="phone">
        <div className="cart_card_img_container">
          <Card.Img
            variant="top"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "contain",
              margin: "0.5rem",
            }}
            src={phoneItem.img}
            alt=""
          />
        </div>
        <Card.Body>
          <Card.Title
            as="h4"
            style={{
              color: "#617d98",
              fontSize: ".8rem",
              marginTop: "0.25rem",
              fontWeight: "bold",
            }}
          >
            {phoneItem.brand} {phoneItem.model}
          </Card.Title>
          <Card.Text>Price: {phoneItem.price}</Card.Text>
          <Card.Text>Quantity: {phoneItem.count}</Card.Text>

          <Button
            size="sm"
            variant="dark"
            onClick={() => deleteFromCart(phoneItem.id)}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </article>
  );
};
export default CartItem;
