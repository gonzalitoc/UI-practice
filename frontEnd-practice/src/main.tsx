import React from "react";
import ReactDOM from "react-dom/client";
import "./output.css";
import Header from "./components/Header.tsx";
import Search from "./components/Search.tsx";
import Category from "./components/category/Category.tsx";
import Footer from "./components/footer/Footer.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <Search />
    <Category />
    <Footer />
  </React.StrictMode>
);
