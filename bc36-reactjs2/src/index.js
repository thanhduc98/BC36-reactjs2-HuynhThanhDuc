import React from "react";
import ReactDOM from "react-dom/client";
import HomeLayout from "./components/HomeLayout/HomeLayout";

// Nhúng css
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HomeLayout />
  </React.StrictMode>
);
