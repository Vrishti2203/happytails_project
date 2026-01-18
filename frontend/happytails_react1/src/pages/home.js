import React from "react";
import ball from "../asset/ball.jpg";
import rope from "../asset/rope.jpg";
import bone from "../asset/bone.jpg";

export default function Home() {
  const products = [
    { name: "Paw Bounce Ball", price: "₹299", img: ball },
    { name: "Tangle Rope", price: "₹199", img: rope },
    { name: "Snuggle Bone", price: "₹199", img: bone }
  ];

  return (
    <div style={{ background: "#FFF8F1" }}>
      {/* HERO SECTION */}
      <div style={{ textAlign: "center", padding: "80px 20px" }}>
        <h1 style={{ color: "#003B2D", fontSize: "36px" }}>
          Toys That Make Tails Go Crazy!
        </h1>
        <p style={{ color: "#555", marginBottom: "30px" }}>
          Safe, fun and playful toys for your furry best friends 🐾
        </p>
        <button
          style={{
            background: "#003B2D",
            color: "#fff",
            padding: "12px 28px",
            borderRadius: "8px",
            border: "none",
            fontWeight: "600",
            cursor: "pointer"
          }}
        >
          SHOP NOW
        </button>
      </div>

      {/* PRODUCTS SECTION */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          padding: "0 40px 80px"
        }}
      >
        {products.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              borderRadius: "14px",
              padding: "24px",
              textAlign: "center",
              boxShadow: "0 4px 10px rgba(0,0,0,0.08)"
            }}
          >
            {/* PRODUCT IMAGE */}
            <img
              src={item.img}
              alt={item.name}
              style={{
                width: "120px",
                height: "120px",
                objectFit: "contain",
                marginBottom: "16px"
              }}
            />

            <h3 style={{ color: "#003B2D", marginBottom: "8px" }}>
              {item.name}
            </h3>
            <p style={{ fontWeight: "600", marginBottom: "16px" }}>
              {item.price}
            </p>

            <button
              style={{
                background: "#FF914D",
                color: "#fff",
                border: "none",
                padding: "10px 18px",
                borderRadius: "20px",
                cursor: "pointer",
                fontWeight: "600"
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
