const mongoose = require("mongoose");

const analysisSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    atsScore: {
      type: Number,
      required: true,
    },

    requiredSkills: [String],

    foundSkills: [String],

    missingSkills: [String],

    suggestions: [String],

    jobDescription: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Analysis",
  analysisSchema
);