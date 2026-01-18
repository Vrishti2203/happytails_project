import React from "react";
import dogImg from "../asset/doggy.jpg"; // update path if needed

export default function About() {
  return (
    <div
      style={{
        background: "#FFF8F1",
        padding: "80px 60px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "60px",
        alignItems: "center"
      }}
    >
      {/* LEFT IMAGE */}
      <img
        src={dogImg}
        alt="Happy dog playing"
        style={{
          width: "100%",
          borderRadius: "18px",
          objectFit: "cover"
        }}
      />

      {/* RIGHT CONTENT */}
      <div>
        <h2 style={{ color: "#003B2D", marginBottom: "10px" }}>
          HAPPY TAILS – About Us
        </h2>

        <p style={{ color: "#444", lineHeight: "1.7", marginBottom: "20px" }}>
          We design safe, fun and durable toys that bring joy to every dog.
          Happy Tails was created to give pets playful moments while keeping
          their health and safety in mind.
        </p>

        <h3 style={{ marginBottom: "12px" }}>Why Happy Tails?</h3>

        <div style={{ display: "flex", gap: "15px", marginBottom: "30px" }}>
          {["Safe Materials", "Strong & Durable", "Loved By Dogs"].map(
            (item, index) => (
              <div
                key={index}
                style={{
                  background: "#fff",
                  padding: "10px 18px",
                  borderRadius: "12px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.08)",
                  fontSize: "14px",
                  fontWeight: "500"
                }}
              >
                {item}
              </div>
            )
          )}
        </div>

        <h3>Our Mission</h3>
        <p style={{ color: "#444", lineHeight: "1.7" }}>
          To make every dog's playtime happier, healthier, and more exciting
          with safe and affordable toys.
        </p>
      </div>
    </div>
  );
}
