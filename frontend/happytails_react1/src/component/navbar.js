import React from "react";
import{useContext} from "react";
import {CartContext}  from "../context/CartContext";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../asset/logo.png.jpg";

function Navbar() {
  const { cart } = useContext(CartContext);
  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src={logo} alt="Logo" className="logo-img" />
       <h2 className="logo">HappyTails</h2>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/product1">Products</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/cart">Cart({cart.length})</Link></li>
        <Link to="/cart"></Link>

      </ul>
    </nav>
  );
}

export default Navbar;
