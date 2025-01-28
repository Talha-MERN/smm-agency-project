const Contact = require("../../models/contact");

const contactService = async (req, res) => {
  const { companyName, fullName, email, phone, yourMessage } = req.fields;

  if (!companyName || !fullName || !email || !phone || !yourMessage) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const contact = new Contact({
      companyName,
      fullName,
      email,
      phone,
      yourMessage,
    });

    // console.log(contact);
    const a = await contact.save();
    console.log(a);

    res.status(200).json({
      message: "Form submitted successfully!",
      data: contact,
    });
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({
      message: "An error occurred while saving the form data.",
      error: error.message,
    });
  }
};

module.exports = { contactService };
