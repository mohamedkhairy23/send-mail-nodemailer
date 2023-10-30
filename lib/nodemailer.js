"use strict";
const nodemailer = require("nodemailer");

const nodeMailer = async (to, subject, html) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "mohamedkhairy17696@gmail.com",
      pass: process.env.PASSWORD,
    },
  });

  const message = {
    from: '"Mohamed Khairy 👻" <mohamedkhairy17696@gmail.com>', // sender address
    to: to, // list of receivers
    subject: subject, // Subject line
    text: subject, // plain text body
    html: html, // html body
    attachments: [
      {
        filename: "event.ics",
        content:
          "BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//hacksw/handcal//NONSGML v1.0//EN\r\nBEGIN:VEVENT\r\nUID:12345\r\nDTSTAMP:20230428T120000Z\r\nDTSTART:20230510T140000Z\r\nDTEND:20230510T150000Z\r\nSUMMARY:Meeting with John Doe\r\nLOCATION:456 Main Street\r\nEND:VEVENT\r\nEND:VCALENDAR",
        contentType: "text/calendar",
      },
      {
        filename: "image.jpeg",
        path: "https://images.pexels.com/photos/18381909/pexels-photo-18381909/free-photo-of-a-mountain-peak-above-the-clouds.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      // {
      //   filename: "git.zip",
      //   path: "https://github.com/mohamedkhairy23/E-commerce/archive/refs/heads/main.zip",
      // },
    ],
  };

  await transporter.sendMail(message, (err, info) => {
    if (err) {
      return err;
    } else {
      return `email sent ${info.response}`;
    }
  });
};

module.exports = { nodeMailer };
