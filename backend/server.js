const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// CONTACT FORM API
app.post("/contact", (req, res) => {
  const { name, email, phone, message } = req.body;

  const entry = `
--- CONTACT MESSAGE ---
Name: ${name}
Email: ${email}
Phone Number:${phone}
Message: ${message}
----------------------
`;

  fs.appendFile("data.txt", entry, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error saving contact");
    }
    res.json(200).send("Saved");
  });
});

// ORDER API (OPTIONAL – KEEPING SAFE)
app.post("/order", (req, res) => {
  const { name, phone, address, cart, total } = req.body;

  const items = cart
    .map((item) => `${item.name} (₹${item.price})`)
    .join(", ");

  const entry = `
--- NEW ORDER ---
Name: ${name}
Phone: ${phone}
Address: ${address}
Items: ${items}
Total: ₹${total}
Payment: Cash on Delivery
------------------
`;

  fs.appendFile("data.txt", entry, (err) => {
    if (err) {
      return res.status(500).send("Error saving order");
    }
    res.json({ success: true });
  });
});

// START SERVER
app.listen(5000, () => {
  console.log(" Server running on port 5000");
});
