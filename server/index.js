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

// GET - Read a single crop by ID from MongoDB
app.get("/api/crops/:id", async (req, res) => {
  try {
    const crop = await Crop.findById(req.params.id);

    if (!crop) {
      return res.status(404).json({
        message: "Crop not found",
      });
    }

    res.status(200).json(crop);
  } catch (error) {
    res.status(400).json({
      message: "Invalid crop ID",
      error: error.message,
    });
  }
});

// POST - Create a new crop in MongoDB
app.post("/api/crops", async (req, res) => {
  try {
    const {
      name,
      season,
      soilType,
      description,
      image,
      suitableLocations,
      durationDays,
    } = req.body;

    // Validate required fields
    if (!name || !season || !soilType || !description || !durationDays) {
      return res.status(400).json({
        message:
          "name, season, soilType, description, and durationDays are required",
      });
    }

    // Create a new crop document
    const crop = new Crop({
      name,
      season,
      soilType,
      description,
      image: image || "",
      suitableLocations: suitableLocations || [],
      durationDays,
    });

    // Save crop to MongoDB
    const savedCrop = await crop.save();

    res.status(201).json({
      message: "Crop created successfully",
      crop: savedCrop,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to create crop",
      error: error.message,
    });
  }
});

// PUT - Update an existing crop in MongoDB
app.put("/api/crops/:id", async (req, res) => {
  try {
    const updatedCrop = await Crop.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedCrop) {
      return res.status(404).json({
        message: "Crop not found",
      });
    }

    res.status(200).json({
      message: "Crop updated successfully",
      crop: updatedCrop,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to update crop",
      error: error.message,
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`SmartCropPlanner API running on port ${PORT}`);
});