const nodemailer = require("nodemailer");
const sendMail = async(req, res) => {
   // let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            // TODO: replace `user` and `pass` values from <https://forwardemail.net>
            user: 'jaquan.denesik41@ethereal.email',
            pass: 'HU5C71qP6G7pntVSEf'
        },
        tls: {
            ciphers:'SSLv3'
        },
    });
let info = await transporter.sendMail({
    from: '"Aadi Jain 👻" <aadi@gmil.com>', // sender address
    to: "jainnaadi@gmail.com", // list of receivers
    subject: "Hello Aadi 123", // Subject line
    text: "Hello Aadi Jain", // plain text body
    html: "<b>Hello world?</b>", // html body
});
console.log("Message sent: %s", info.messageId);


    res.json(info);
};

module.exports = sendMail;
