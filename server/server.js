const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db/config");
const express_formidable = require("express-formidable");
const cookieParser = require("cookie-parser");

dotenv.config();

const app = express();

const corsOptions = {
  origin:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://insight-tech-solutions.netlify.app/",
  credentials: true,
};

// Middleware
app.use(express_formidable());
app.options("*", cors(corsOptions));
app.use(cors(corsOptions));
app.use(cookieParser());

// Routes

const contactRoutes = require("./routes/contactRoutes");
app.use("/api/v1/contact", contactRoutes);

// Connect to MongoDB before starting the server
connectDB()
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });
