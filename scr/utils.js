const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    // secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "jaylon.skiles@ethereal.email",
      pass: "ACMGjzAzV8FjPXSsJ5",
    },
  });

  async function main(sender , recever ) {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: `👻" <accredian.skiles@ethereal.email>`, // sender address
      to: `abdularham689@gmail.com`, // list of receivers
      subject: "HELLO  ✔", // Subject line
      text: "i invite you to accept this referal", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }
  
  module.exports = { main }