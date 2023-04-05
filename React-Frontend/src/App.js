//import "./App.css";
//import "./style.css";

//TODO: add CSS styling
import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Shop from "./components/shop";
import Home from "./components/home/Home";
import Error from "./utils/Error";
import Cart from "./components/shoppingCart";
import Purchase from "./components/paymentEntry";
import Shipping from "./components/shippingEntry";
import OrderSummary from "./components/viewOrders";
import OrderConfirm from "./components/confirmation";
import StandardNavbar from "./utils/standardNavbar";
import ContactUs from "./components/contactUs";
import Footer from "./utils/footer";
import Header from "./utils/header";
import Review from "./components/review";
import AboutUs from "./components/aboutUs/AboutUs";

// Bootstrap CSS
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <Router>
      <StandardNavbar cart={cart} setCart={setCart} />
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={<Shop cart={cart} setCart={setCart}></Shop>}
        />

        <Route
          path="/catalog"
          element={<Shop cart={cart} setCart={setCart} />}
        />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />

        <Route path="/home" element={<Home />} />

        <Route path="/about" element={<AboutUs />} />

        <Route path="/contactUs" element={<ContactUs />} />

        <Route
          path="/cart/purchase"
          element={cart.length < 1 ? <Navigate to="/catalog" /> : <Purchase />}
        />

        <Route
          path="/cart/shipping"
          element={cart.length < 1 ? <Navigate to="/catalog" /> : <Shipping />}
        />

        <Route
          path="/cart/review"
          element={
            cart.length < 1 ? (
              <Navigate to="/catalog" />
            ) : (
              <Review cart={cart} setCart={setCart} />
            )
          }
        />

        <Route path="/cart/confirmation" element={<OrderConfirm />} />

        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
