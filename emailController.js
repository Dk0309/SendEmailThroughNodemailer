const nodemailer = require('nodemailer');

const emailController = (req,res) => {
    const {to, subject, text } = req.body;


    const transporter = nodemailer.createTransport({
        port: 465,               // true for 465, false for other ports
        host: "smtp.gmail.com",
           auth: {
                user: 'Your_Email_ID',
                pass:'**************',
             },
        secure: true,
        });

    const mailData = {
        from: 'kumardipu54@gmail.com',
        to: to,
        subject: subject,
        text: text,
        html: "<b>Hey there!</b><br> this is the first message from Node JS..."
    }

    transporter.sendMail(mailData, function (err, info) {
        if(err)
          return console.log(err)
        res.status(200).send({message: 'email send', message_id: info.messageId});
     });
}

module.exports = {emailController};
