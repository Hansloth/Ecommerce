// import { BsCartFill } from "react-icons/bs";
// import ItemsCount from "./itemsCount";
import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import CartItem from "../utils/CartItem";
import "../style.css";

export default function Cart(props) {
  const location = useLocation();
  const { cart, setCart } = props;

  const deleteFromCart = (phoneItem) => {
    setCart((cart) =>
      cart.filter((phone) => {
        return phone.id !== phoneItem;
      })
    );
  };

  //navigate to 'cart/purchase' and pass cart content.
  const navigate = useNavigate();
  // const handleCart = () => {
  //   navigate("/cart", { state: { cart: cart } });
  // };
  const handleCheckout = () => {
    navigate("/cart/shipping", { state: { cart: cart } });
  };

  return (
    <div>
      <h1>Your Cart</h1>

      {cart.length > 0 ? (
        <React.Fragment>
          <Button
            variant="outline-dark"
            onClick={handleCheckout}
            style={{ marginLeft: "10%" }}
          >
            Proceed to Checkout
            <Badge pill bg="dark" style={{ marginLeft: ".2rem" }}></Badge>
          </Button>
          <section className="shoplist">
            {cart.map((cart) => {
              return (
                <CartItem
                  key={cart.id}
                  phoneItem={cart}
                  deleteFromCart={deleteFromCart}
                ></CartItem>
              );
            })}
          </section>
        </React.Fragment>
      ) : (
        <h3>Cart is empty!</h3>
      )}
    </div>
  );
}
