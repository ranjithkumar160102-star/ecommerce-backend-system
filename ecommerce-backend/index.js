const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();

// Database Connection
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Authentication Routes
app.use(
  "/api/auth",
  require("./routes/authenticationRoutes")
);

// Product Routes
app.use(
  "/api/products",
  require("./routes/productRoutes")
);

// Analytics Routes
app.use(
  "/api/analytics",
  require("./routes/analyticsRoutes")
);

// Default Route
app.get("/", (req, res) => {
  res.send("API Running");
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Started on Port ${PORT}`);
});