const nodemailer = require("nodemailer");
const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, phone, message } = req.body;
  console.log(email);

  if (!name || !email || !phone) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "usamaali487@yahoo.com",
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error sending email", error: error.message });
  }
});

module.exports = router;
