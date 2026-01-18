import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

// product images
import ball from "../asset/ball.jpg";
import rope from "../asset/rope.jpg";
import bone from "../asset/bone.jpg";

const productImages = {
  1: ball,
  2: rope,
  3: bone,
};

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div
      style={{
        background: "#FFF8F1",
        padding: "60px 80px",
        minHeight: "60vh",
      }}
    >
      <h1 style={{ color: "#003B2D", marginBottom: "30px" }}>
        Your Cart
      </h1>

      {cart.length === 0 && (
        <h2 style={{ color: "#777" }}>Cart is empty!</h2>
      )}

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "30px",
            background: "#fff",
            padding: "20px",
            borderRadius: "16px",
            marginBottom: "20px",
            boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
          }}
        >
          {/* IMAGE */}
          <img
            src={productImages[item.id]}
            alt={item.name}
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />

          {/* INFO */}
          <div style={{ flex: 1 }}>
            <h3 style={{ margin: "0 0 8px", color: "#003B2D" }}>
              {item.name}
            </h3>
            <p style={{ margin: 0, fontWeight: "600" }}>
              ₹{item.price}
            </p>
          </div>

          {/* REMOVE */}
          <button
            onClick={() => removeFromCart(item.id)}
            style={{
              background: "#FF914D",
              color: "#fff",
              border: "none",
              padding: "10px 18px",
              borderRadius: "20px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Remove
          </button>
        </div>
      ))}

      {/* PROCEED TO CHECKOUT */}
      {cart.length > 0 && (
        <button
          onClick={() => navigate("/checkout")}
          style={{
            marginTop: "30px",
            background: "#003B2D",
            color: "#fff",
            padding: "14px 36px",
            borderRadius: "30px",
            border: "none",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Proceed to Checkout
        </button>
      )}
    </div>
  );
}

export default Cart;
