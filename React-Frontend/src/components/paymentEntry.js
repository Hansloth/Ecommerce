import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
// import StandardNavbar from "./standardNavbar";
import "../style.css";

export default function Payment() {
  const location = useLocation();
  const [payState, setPayState] = useState({
    paymentFirstName: location?.state?.payment?.paymentFirstName || "",
    paymentLastName: location?.state?.payment?.paymentLastName || "",
    paymentCardNum: location?.state?.payment?.paymentCardNum || "",
    paymentCardCVC: location?.state?.payment?.paymentCardCVC || "",
    paymentCardYear: location?.state?.payment?.paymentCardYear || "",
    paymentCardMonth: location?.state?.payment?.paymentCardMonth || "",
  });

  //const cart = location.state.cart;

  const onChange = (e) => {
    /*
      used to set state of 

      paymentFirstName
      paymentLastName
      paymentCardNum
      paymentCardCVC
      paymentCardYear
      paymentCardMonth
    */
    const { name, value } = e.target;
    setPayState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    navigate("/cart/review", {
      state: { payState: payState, shipState: location?.state?.shipState },
    });
    //     navigate("/cart/shipping", {state:{payState: payState, cart: cart}});
  };

  return (
    <>
      <div className="center">
        <Form onSubmit={handleSubmit}>
          <h1>Payment Information</h1>

          <Col xs={4}>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                className="paymentEntry-font"
                type="text"
                name="paymentFirstName"
                placeholder="First Name"
                onChange={onChange}
                value={payState.paymentFirstName || ""}
              />
            </Form.Group>
          </Col>

          <Col xs={4}>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                className="paymentEntry-font"
                type="text"
                name="paymentLastName"
                placeholder="Last Name"
                onChange={onChange}
                value={payState.paymentLastName || ""}
              />
            </Form.Group>
          </Col>

          <Col xs={4}>
            <Form.Group>
              <Form.Label>Credit Card Number</Form.Label>
              <Form.Control
                className="paymentEntry-font"
                type="text"
                name="paymentCardNum"
                placeholder="xxxx-xxxx-xxxx-xxxx"
                onChange={onChange}
                value={payState.paymentCardNum || ""}
              />
            </Form.Group>
          </Col>

          <Col xs={4}>
            <Form.Group>
              <Form.Label>Card CVC</Form.Label>
              <Form.Control
                className="paymentEntry-font"
                type="text"
                name="paymentCardCVC"
                placeholder="xxx"
                onChange={onChange}
                value={payState.paymentCardCVC || ""}
              />
            </Form.Group>
          </Col>

          <Col xs={4}>
            <Form.Group>
              <Form.Label>Card Expire Year</Form.Label>
              <Form.Control
                className="paymentEntry-font"
                type="text"
                name="paymentCardYear"
                placeholder="xxxx (1950-2030)"
                onChange={onChange}
                value={payState.paymentCardYear || ""}
              />
            </Form.Group>
          </Col>

          <Col xs={4}>
            <Form.Group>
              <Form.Label>Card Expire Month</Form.Label>
              <Form.Control
                className="paymentEntry-font"
                type="text"
                name="paymentCardMonth"
                placeholder="01-12"
                onChange={onChange}
                value={payState.paymentCardMonth || ""}
              />
            </Form.Group>
          </Col>

          <button>Review Order</button>
        </Form>
      </div>
    </>
  );

  //TODO: develop entry for the collection of billing inFormation before placing an order.
}
