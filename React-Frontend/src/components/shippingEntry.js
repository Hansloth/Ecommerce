import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
// import StandardNavbar from "./standardNavbar";
import "../style.css";

export default function Shipping() {
  const location = useLocation();
  const [shipState, shipSetState] = useState({
    shippingFirstName: location?.state?.shipping?.shippingFirstName || "",
    shippingLastName: location?.state?.shipping?.shippingLastName || "",
    shippingPhoneNumber: location?.state?.shipping?.shippingPhoneNumber || "",
    shippingAddressOne: location?.state?.shipping?.shippingAddressOne || "",
    shippingAddressTwo: location?.state?.shipping?.shippingAddressTwo || "",
    shippingCity: location?.state?.shipping?.shippingCity || "",
    shippingState: location?.state?.shipping?.shippingState || "",
    shippingZip: location?.state?.shipping?.shippingZip || "",
  });
  console.log(shipState);
  // const getfromPayState = useState(location.state.payState);
  // console.log(getfromPayState);
  useEffect(() => {
    shipSetState(shipState);
  }, []);
  const onChange = (e) => {
    /*
      used to set state of 

      shippingFirstName
      shippingLastName
      shippingPhoneNumber
    */
    const { name, value } = e.target;
    shipSetState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    console.log(
      "line 40 shipping: " + location?.state?.payState?.paymentFirstName
    );
    navigate("/cart/purchase", {
      state: {
        payment: location?.state?.payState,
        shipState: shipState,
      },
    });
  };

  return (
    <>
      <div className="center">
        <Form onSubmit={handleSubmit}>
          <h1>Shipping Information</h1>

          <Col xs={4}>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                className="shippingEntey-font"
                type="text"
                name="shippingFirstName"
                placeholder="First Name"
                autoComplete={false}
                onChange={onChange}
                value={shipState.shippingFirstName || ""}
              />
            </Form.Group>
          </Col>

          <Col xs={4}>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                className="shippingEntey-font"
                type="text"
                name="shippingLastName"
                placeholder="Last Name"
                autoComplete={false}
                onChange={onChange}
                value={shipState.shippingLastName || ""}
              />
            </Form.Group>
          </Col>

          <Col xs={4}>
            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                className="shippingEntey-font"
                type="text"
                name="shippingPhoneNumber"
                placeholder="*** - *** ****"
                autoComplete={false}
                onChange={onChange}
                value={shipState.shippingPhoneNumber || ""}
              />
            </Form.Group>
          </Col>

          <Col xs={4}>
            <Form.Group>
              <Form.Label>Address 1</Form.Label>
              <Form.Control
                className="shippingEntey-font"
                type="text"
                name="shippingAddressOne"
                placeholder="Address 1"
                autoComplete={false}
                onChange={onChange}
                value={shipState.shippingAddressOne || ""}
              />
            </Form.Group>
          </Col>

          <Col xs={4}>
            <Form.Group>
              <Form.Label>Address 2</Form.Label>
              <Form.Control
                className="shippingEntey-font"
                type="text"
                name="shippingAddressTwo"
                placeholder="Address 2"
                autoComplete={false}
                onChange={onChange}
                value={shipState.shippingAddressTwo || ""}
              />
            </Form.Group>
          </Col>

          <Col xs={4}>
            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control
                className="shippingEntey-font"
                type="text"
                name="shippingCity"
                placeholder="City"
                autoComplete={false}
                onChange={onChange}
                value={shipState.shippingCity || ""}
              />
            </Form.Group>
          </Col>

          <Col xs={4}>
            <Form.Group>
              <Form.Label>State</Form.Label>
              <Form.Control
                className="shippingEntey-font"
                type="text"
                name="shippingState"
                placeholder="State"
                autoComplete={false}
                onChange={onChange}
                value={shipState.shippingState || ""}
              />
            </Form.Group>
          </Col>

          <Col xs={4}>
            <Form.Group>
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                className="shippingEntey-font"
                type="text"
                name="shippingZip"
                placeholder="Zip Code"
                autoComplete={false}
                onChange={onChange}
                value={shipState.shippingZip || ""}
              />
            </Form.Group>
          </Col>

          <button>Proceed to Payment</button>
        </Form>
      </div>
    </>
  );

  //TODO: develop entry for the collection of shipping information before placing an order.
}

//alert or consol log
