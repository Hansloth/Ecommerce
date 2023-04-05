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
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from "cdbreact";

export default function Footer() {
  return (
    <CDBFooter className="shadow footer">
      <CDBBox
        display="flex"
        flex="column"
        className="mx-auto py-5"
        style={{ width: "90%" }}
      >
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <span className="ml-3 h5 font-weight-bold">E-Shop</span>
            </a>
            <p className="my-3" style={{ width: "250px" }}>
              Here at E-Shop, we provide an exceptional customer experience and
              offer the latest smartphone gadgets. Our motto is simple. Deliver
              the best price.
            </p>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              E-Shop
            </p>
            <CDBBox
              flex="column"
              display="flex"
              style={{ cursor: "pointer", padding: "0" }}
            >
              <CDBFooterLink as={Link} to="/catalog">
                Shop
              </CDBFooterLink>
              <CDBFooterLink as={Link} to="/about">
                About Us
              </CDBFooterLink>
              <CDBFooterLink as={Link} to="/contactus">
                Contact Us
              </CDBFooterLink>
              <CDBFooterLink href="/">Blog</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Help
            </p>
            <CDBBox
              display="flex"
              flex="column"
              style={{ cursor: "pointer", padding: "0" }}
            >
              <CDBFooterLink as={Link} to="/contact">
                Support
              </CDBFooterLink>
              <CDBFooterLink as={Link} to="/contactus">
                Contact Us
              </CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Products
            </p>
            <CDBBox
              display="flex"
              flex="column"
              style={{ cursor: "pointer", padding: "0" }}
            >
              <CDBFooterLink as={Link} to="/catalog">
                Smartphones
              </CDBFooterLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <CDBBox display="flex" justifyContent="center" className="mx-auto mt-4">
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
        <small className="text-center mt-5">
          &copy; E-Shop, 2022. All rights reserved.
        </small>
      </CDBBox>
    </CDBFooter>
  );
}
