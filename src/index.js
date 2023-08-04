import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./components/Nav";
import "./index.module.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Nav />
    </React.StrictMode>
);
