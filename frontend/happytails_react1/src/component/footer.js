import React from "react";
import { Link } from "react-router-dom"
import "./footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          
          <div>
            <h3>HAPPY TAILS</h3>
            <p>Toys That Make Tails Go Crazy!</p>
            <p>Safe, fun & playful pet products</p>
          </div>

          <div>
            <h4>Quick Links</h4>
           <p><Link to="/">Home</Link></p>
            <p><Link to="/about">About</Link></p>
            <p><Link to="/product1">Products</Link></p>
            <p><Link to="/contact">Contact</Link></p>
          </div>

          <div>
            <h4>Contact Info</h4>
            <p>Bangalore</p>
            <p>happytails@gmail.com</p>
            <p>+91 9XXXXXXXXX</p>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        © 2025 HAPPY TAILS | All Rights Reserved
      </div>
    </>
  );
}
