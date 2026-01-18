import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import Navbar from "./component/navbar";
import Footer from "./component/footer";

import Home from "./pages/home";
import About from "./pages/about";
import Product1 from "./pages/product1";
import Product2 from "./pages/product2";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";


function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product1" element={<Product1 />} />
          <Route path="/product2" element={<Product2 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>

        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
