import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail", // Replace with your SMTP server host
  secure: false, // Set to true if using SSL/TLS
  auth: {
    user: process.env.EMAIL_FROM, // Replace with your email username
    pass: process.env.EMAIL_PASSWORD, // Replace with your email password
  },
});

export const sendEmail = async (options) => {
  try {
    await transporter.sendMail(options);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
