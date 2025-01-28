const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  fullName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 15,
    match: /^[0-9+() -]+$/,
  },
  yourMessage: {
    type: String,
    required: true,
    minlength: 10,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

const Contact = mongoose.model("contact", contactSchema);

module.exports = Contact;
