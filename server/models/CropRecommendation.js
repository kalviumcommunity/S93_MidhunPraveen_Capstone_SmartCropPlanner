const mongoose = require("mongoose");

const cropRecommendationSchema = new mongoose.Schema(
  {
    location: {
      type: String,
      required: true,
      trim: true,
    },

    soilType: {
      type: String,
      required: true,
      trim: true,
    },

    season: {
      type: String,
      required: true,
      trim: true,
    },

    recommendedCrops: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Crop",
      },
    ],

    notes: {
      type: String,
      default: "",
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "CropRecommendation",
  cropRecommendationSchema
);dir