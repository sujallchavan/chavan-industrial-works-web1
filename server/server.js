// server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/fabricationShop", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define the schema and model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  location: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", contactSchema);

// Route to handle contact form submission
app.post("/send-email", (req, res) => {
  const formData = req.body;

  // Save to MongoDB
  const newContact = new Contact(formData);
  newContact
    .save()
    .then(() =>
      res.status(200).json({ message: "Message saved successfully!" })
    )
    .catch((err) => res.status(500).json({ error: "Failed to save message!" }));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
