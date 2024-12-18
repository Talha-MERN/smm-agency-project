const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const serviceSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3, // Optional validation
      maxlength: 50, // Optional validation
    },
    description: {
      type: String,
      required: true,
      minlength: 10, // Optional validation
      maxlength: 500, // Optional validation
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

module.exports = model("Service", serviceSchema, "services");
