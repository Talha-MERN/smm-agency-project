const express = require("express");
const { getContact } = require("../controllers/contact/getContact");
const { contactService } = require("../controllers/contact/contactService");
const router = express.Router();

router.post("/", contactService);
router.get("/", getContact);

module.exports = router;
