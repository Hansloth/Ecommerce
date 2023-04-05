import { BsCartFill } from "react-icons/bs";
import ItemsCount from "./itemsCount";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
// import Cart from "./cart";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";

function Header() {
  return (
    <Card
      className="header"
      style={{
        border: "none",
        borderRadius: "0px",
        backgroundColor: "#262626",
        borderBottom: "0.1rem solid #000",
        backgroundImage:
          "url(https://hindlaptops.herokuapp.com/static/css/smartphones.a45b5f37f112.jpg)",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "300px",
      }}
    >
      <Card.Body style={{ textAlign: "center" }}>
        <Card.Title style={{ color: "#fff", fontSize: "2.5rem" }}>
          Latest Smartphone Gadgets
        </Card.Title>
        <Card.Text
          style={{ color: "#fff", fontSize: "1.4rem", marginBottom: "0.3rem" }}
        >
          Unlock your next savings deal & explore the latest technologies
        </Card.Text>
        <Button
          variant="primary"
          size=""
          as={Link}
          to="/catalog"
          style={{ border: "solid 1px #0051c7" }}
        >
          Start Shopping
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Header;
