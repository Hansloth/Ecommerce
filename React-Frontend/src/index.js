import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render
root.render(<App />);
