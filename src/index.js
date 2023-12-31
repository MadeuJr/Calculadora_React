import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./components/Nav";
import CalculatorBody from "./components/CalculatorBody";
import "./index.module.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Nav />
        <CalculatorBody />
    </React.StrictMode>
);
