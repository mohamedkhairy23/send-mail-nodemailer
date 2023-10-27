const { form } = require("../lib/form");
const { nodeMailer } = require("../lib/nodemailer");

module.exports = {
  Send: async (req, res) => {
    const mail = await nodeMailer(
      req.body.to,
      "From Mohamed Khairy",
      form(req.body.title, req.body.message)
    );
    res.send("Email Send Successfully");
  },
};
