import { BsCartFill } from "react-icons/bs";
import ItemsCount from "../utils/itemsCount";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import Cart from "../components/cart";

const StandardNavbar = (props) => {
  const { cart, setCart } = props;
  // const location = useLocation();

  // const [cart, setCart] = useState([]);

  // useEffect(() => {
  //   try {
  //     setCart(location.state.cart);
  //   } catch (error) {
  //     console.log("No Previous Cart");
  //   }
  // }, []);

  // const navigate = useNavigate();

  // const handleCart = () => {
  //   navigate("/cart", { state: { cart: cart } });
  // };

  return (
    <Navbar
      bg="light"
      expand="lg"
      sticky="top"
      style={{ borderBottom: "0.1rem solid #8c8c8c" }}
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          E-shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link as={Link} to="/home" className="nav-link">
              Home
            </Link>

            <Link as={Link} to="/catalog" className="nav-link">
              Shop
            </Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contactUs" className="nav-link">
              Contact Us
            </Nav.Link>
          </Nav>
          <Cart cart={cart} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default StandardNavbar;
