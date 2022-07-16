const express = require("express");
const cloudinary = require("cloudinary").v2;
const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);
const cors = require("cors");

const mg = mailgun.client({
  username: "ronita",
  key: "e7546d84882baf969a1a659480984668-18e06deb-651f3a01",
});

const app = express();

app.use(cors());
app.use(express.json());

app.post("send-email", (req, res) => {
  console.log(req.body);
  try {
    mg.messages
      .create(sandboxa751f5729fcc41cc9d39ad25fdda5c8a.mailgun.org, {
        from: "Mailgun Sandbox <postmaster@sandboxa751f5729fcc41cc9d39ad25fdda5c8a.mailgun.org>",
        to: ["ronita.chhim@gmail.com"],
        subject: "Hello",
        text: "Testing some Mailgun awesomness!",
      })
      .then((msg) => console.log(msg)) // logs response data
      .catch((err) => console.log(err)); // logs any error`;
  } catch (error) {
    res.status(400).json(error.message);
  }
});
