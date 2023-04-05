//Get the current count of products in the shopping cart for display in 'shop.js'
import { BsCartFill } from "react-icons/bs";
import { phones } from "../data/phones";
import FormattedPhoneData from "../utils/ProcessPhone";
import ItemsCount from "../utils/itemsCount";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
export default function cart(props) {
  const { cart } = props;
  return (
    <Button variant="outline-dark" as={Link} to="/cart">
      <BsCartFill style={{ verticalAlign: "sub" }} /> Cart
      <Badge pill bg="dark" style={{ marginLeft: ".2rem" }}>
        {<ItemsCount cart={cart} />}
      </Badge>
    </Button>
  );
}
