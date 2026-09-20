const express = require("express");
const cors = require("cors");

const connectDB = require("./db");
const Crop = require("./models/Crop");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB();

// Test API
app.get("/", (req, res) => {
  res.json({
    message: "SmartCropPlanner API is running",
  });
});

// GET - Read all crops from MongoDB
app.get("/api/crops", async (req, res) => {
  try {
    const crops = await Crop.find();
    res.status(200).json(crops);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch crops",
      error: error.message,
    });
  }
});

// POST - Write a new crop to MongoDB
app.post("/api/crops", async (req, res) => {
  try {
    const crop = new Crop(req.body);
    const savedCrop = await crop.save();

    res.status(201).json(savedCrop);
  } catch (error) {
    res.status(400).json({
      message: "Failed to create crop",
      error: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`SmartCropPlanner API running on port ${PORT}`);
});