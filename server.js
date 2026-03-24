const express = require("express");
const twilio = require("twilio");
require("dotenv").config();

const app = express();
app.use(express.json());

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

let templates = [
  { id: 1, name: "Welcome", content: "Hello! Welcome to our service.", status: "approved" }
];

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Server running");
});

// GET ALL TEMPLATES
app.get("/templates", (req, res) => {
  res.json(templates);
});

// CREATE TEMPLATE
app.post("/templates/create", (req, res) => {
  const { name, content } = req.body;

  const newTemplate = {
    id: Date.now(),
    name,
    content,
    status: "approved" // Set to approved for testing ease
  };

  templates.push(newTemplate);
  res.json(newTemplate);
});

app.post("/templates/send", async (req, res) => {
  const { templateId, to } = req.body;

  // find template
  const template = templates.find(t => t.id == templateId);

  if (!template) {
    return res.status(404).json({ error: "Template not found" });
  }

  // check if approved
  if (template.status !== "approved") {
    return res.status(400).json({ error: "Template not approved" });
  }

  try {
    const message = await client.messages.create({
      body: template.content,
      from: "whatsapp:+14155238886", // Twilio sandbox number
      to: `whatsapp:${to}`
    });

    res.json({
      success: true,
      sid: message.sid
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => console.log("Server started"));