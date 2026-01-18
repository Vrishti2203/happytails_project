import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [placed, setPlaced] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  // SUCCESS SCREEN
  if (placed) {
    return (
      <div
        style={{
          background: "#FFF8F1",
          padding: "100px",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#003B2D" }}>🎉 Order Placed Successfully!</h1>
        <p style={{ marginTop: "10px" }}>
          Payment Method: <strong>Cash on Delivery</strong>
        </p>

        <button
          onClick={() => navigate("/")}
          style={{
            marginTop: "30px",
            background: "#FF914D",
            color: "#fff",
            padding: "12px 30px",
            borderRadius: "25px",
            border: "none",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Go to Home
        </button>
      </div>
    );
  }

  // PLACE ORDER
  const handlePlaceOrder = async () => {
    if (!name || !phone || !address) {
      alert("Please fill all billing details");
      return;
    }

    await fetch("http://localhost:5000/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        phone,
        address,
        cart,
        total,
      }),
    });

    clearCart();
    setPlaced(true);
  };

  return (
    <div
      style={{
        background: "#FFF8F1",
        padding: "70px 80px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "60px",
        minHeight: "70vh",
      }}
    >
      {/* BILLING */}
      <div>
        <h2 style={{ color: "#003B2D", marginBottom: "20px" }}>
          Billing Details
        </h2>

        <input
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />

        <input
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={inputStyle}
        />

        <textarea
          placeholder="Delivery Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={{ ...inputStyle, height: "100px" }}
        />

        <div
          style={{
            margin: "20px 0",
            padding: "15px",
            background: "#fff",
            borderRadius: "12px",
            border: "1px solid #eee",
          }}
        >
          <strong>Payment Method</strong>
          <p style={{ marginTop: "8px" }}>💵 Cash on Delivery (COD)</p>
        </div>

        <button onClick={handlePlaceOrder} style={buttonStyle}>
          Place Order
        </button>
      </div>

      {/* SUMMARY */}
      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "18px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        }}
      >
        <h3 style={{ marginBottom: "20px" }}>Order Summary</h3>

        {cart.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <span>{item.name}</span>
            <span>₹{item.price}</span>
          </div>
        ))}

        <hr style={{ margin: "20px 0" }} />

        <h3>Total: ₹{total}</h3>
        <p style={{ fontSize: "13px", color: "#777" }}>
          * Pay when your order is delivered
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  marginBottom: "15px",
  borderRadius: "14px",
  border: "1px solid #ddd",
  outline: "none",
  fontSize: "14px",
};

const buttonStyle = {
  marginTop: "10px",
  background: "#003B2D",
  color: "#fff",
  padding: "12px 34px",
  borderRadius: "25px",
  border: "none",
  cursor: "pointer",
  fontWeight: "600",
};

export default Checkout;
