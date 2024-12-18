const Service = require("../../models/servicesModels");

const getServices = async (req, res) => {
  try {
    const services = await Service.find();

    res.status(200).json(services);
  } catch (err) {
    console.error("Error fetching services:", err.message);
    res.status(500).json({
      message: "Error fetching services",
      error: err.message,
    });
  }
};

module.exports = { getServices };
