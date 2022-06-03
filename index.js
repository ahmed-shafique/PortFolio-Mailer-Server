import express, { json } from "express";
//const express = require("express");
//const json = require("express");
//const cors = require("cors");

//import { config } from "dotenv";
import cors from "cors";

//const sendMail = require("./utils/mailer/index.js");
import sendMail from "./utils/mailer/index.js";

//import express from "express";
//import dotenv from "dotenv";
//import sgMail from "@sendgrid/mail";
//import cors from "cors";
//import sendMail from "./utils/mailer/index.js";

//config({ path: "./config.env" });
const app = express();
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
app.use(express.json());
app.disable("x-powered-by");

app.post("/send-mail", async (req, res) => {
  const { name, email, number, subject, text } = req.body;
  console.log(name, email, number, subject, text);

  const response = await sendMail(name, email, number, subject, text);

  console.log(response);

  res.json({
    message: "success",
    ...req.body,
  });
});

const PORT = process.env.PORT || 4000;
(async () => {
  try {
    app.listen({ port: PORT }, () =>
      console.log(`🚀 Server ready at http://localhost:${PORT} 🚀`)
    );
  } catch (e) {
    console.log(e);
  }
})();

// module.exports = app;
