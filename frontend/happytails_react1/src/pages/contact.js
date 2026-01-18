import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "+91",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
if(!form.email.endsWith("@gmail.com")){
  alert("Email must be end with @gmail.com")
  return
}
if(!form.phone.startsWith("+91")){
  alert("Phone number must start with +91")
  return
}
    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");

      alert("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Backend not running. Please start server.");
    }
  };

  return (
    <div
      style={{
        background: "#FFF8F1",
        padding: "70px 80px",
        minHeight: "70vh",
      }}
    >
      <h1 style={{ color: "#003B2D", marginBottom: "40px" }}>
        Contact Us
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
        }}
      >
        {/* CONTACT INFO */}
        <div>
          <h3 style={{ color: "#003B2D", marginBottom: "20px" }}>
            Get in Touch
          </h3>

          <p>📍 HappyTails Pet Store, Bangalore</p>
          <p>📞 +91 9XXXXXXXXX</p>
          <p>✉️ happytails@gmail.com</p>

          <p style={{ marginTop: "20px", color: "#555" }}>
            Feel free to contact us for product inquiries,
            feedback, or support.
          </p>
        </div>

        {/* CONTACT FORM */}
        <form
          onSubmit={handleSubmit}
          style={{
            background: "#fff",
            padding: "30px",
            borderRadius: "18px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          }}
        >
          <h3 style={{ marginBottom: "20px" }}>
            Send Message
          </h3>

          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email (example@gmail.com)"
            value={form.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            name="phone"
            placeholder="Your Phone Number (example +91)"
            value={form.phone}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            style={{ ...inputStyle, height: "100px" }}
          />

          <button type="submit" style={buttonStyle}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "12px",
  border: "1px solid #ddd",
};

const buttonStyle = {
  background: "#003B2D",
  color: "#fff",
  padding: "12px 30px",
  borderRadius: "25px",
  border: "none",
  cursor: "pointer",
  fontWeight: "600",
};
