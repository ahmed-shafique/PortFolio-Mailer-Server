//const nodemailer = require("nodemailer");
import nodemailer from "nodemailer";
//const dotenv = require("dotenv");
import dotenv from "dotenv";
//import sgMail from "@sendgrid/mail";
dotenv.config();
//TODO:// check if env variables are set
async function sendMail(name, email, number, subject, text) {
  try {
    let transporter = nodemailer.createTransport({
      //host: "smtp.ionos.com",
      service: "Gmail",
      auth: {
        user: "ahmed.shafique94@gmail.com",
        pass: "vgxipmugsrxgmmnr",
      },
    });
    let info = await transporter.sendMail({
      from: "ahmed.shafique94@gmail.com",
      to: ["ahmed.shafique94@gmail.com"],
      subject: "Portfolio Contact Form Submission ✔",
      html: `   <div style="border:30px solid #07243e; padding: 5%;">
      
      <p
        style="
            font-size: 32px;
            font-weight: bold;
            text-align: center;
            align-self: center;
            width: 100%;
          "
      >
        Portfolio Contact Form Submission Details
      </p>

      <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Number: ${number}</p>
        <p>Subject: ${subject}</p>
        <p>Message: ${text}</p>
    
     

    </div>`,
    });
    console.log(info);
    if (info.messageId) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}

export default sendMail;
