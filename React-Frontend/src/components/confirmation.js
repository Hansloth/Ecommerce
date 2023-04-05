import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GenerateInfoHeaderNew, GenereateItemInfo } from "./orderSummaryGenerator";
import Card from "react-bootstrap/Card";
// import StandardNavbar from "./standardNavbar";
import "../style.css";

function OrderConfirm() {
  const [redirct, setRedirct] = useState(false);
  const [payment, setPayment] = useState([]);
  const [shipping, setShipping] = useState([]);
  const [confirmation, setConfirmation] = useState([]);
  const [cart, setCart] = useState([]);
  //total is temp 'solution'
  const [totals, setTotals] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  //redirect to catalog if needed
  useEffect(() => {
    if (redirct) {
      navigate("/catalog");
    }
  }, [redirct, navigate]);

  useEffect(() => {
    console.log(location);
    if (location?.state?.confirmation && location?.state?.payState && location?.state?.shipState && location?.state?.cart && location.state.cart.length > 0) {
      setPayment(location.state.payState);
      setShipping(location.state.shipState);
      setConfirmation(location.state.confirmation);
      setCart(location.state.cart);
      setTotals(location.state.totals);
      //get all info from database confirmation later
      setPayment((prevState) => ({
        ...prevState,
        paymentCardNum: "****" + prevState.paymentCardNum.slice(-4)
      }));

    } else {
      setRedirct(true);
    }
  }, [location]);

  return <>
    <div className="center">
      <h1>Congratulations! Your order has been confirmed!</h1>
      <section>
        <h1>Confirmation #{confirmation}</h1>
      </section>

      <section>
        <GenerateInfoHeaderNew payment={payment} shipping={shipping} />
      </section>
    </div>
    <section className="shoplist" style={{ marginLeft: "5rem" }}>
      {cart.map((phone, index) => {
        console.log(phone);
        return <GenereateItemInfo key={index} item={phone} />;
      })}
    </section>
    <div className="center">
      <hr />
      <section>
        <h2>Payment Summary #{confirmation}</h2>
        <h2>Subtotal: ${totals[0]}</h2>
        <h2>Shipping & Handling: $4.99</h2>
        <h2>Subtotal Before Taxes: ${totals[1]}</h2>
        <h2>Estimated Taxes: ${totals[2]}</h2>
        <h2>Total: ${totals[3]}</h2>
      </section>
    </div>
  </>
}

export default OrderConfirm;
