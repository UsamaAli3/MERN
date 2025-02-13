const express = require("express");

const { emailReceipt } = require("../../helpers/email-controller");

const router = express.Router();

app.post("/api/send-email", emailReceipt);

module.exports = router;
