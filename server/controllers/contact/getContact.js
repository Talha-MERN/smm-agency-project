const Contact = require("../../models/contact");

const getContact = async (req, res) => {
  try {
    const contacts = await Contact.find();

    res.status(200).json(contacts);
  } catch (err) {
    console.error("Error fetching contacts:", err.message);
    res.status(500).json({
      message: "Error fetching contacts",
      error: err.message,
    });
  }
};

module.exports = { getContact };
