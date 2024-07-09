import React from "react";
import ReactDOM from "react-dom/client";
import "./output.css";
import Header from "./components/Header.tsx";
import Filter from "./components/Filter.tsx";
import Footer from "./components/footer/Footer.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <Filter />
    <Footer />
  </React.StrictMode>
);
