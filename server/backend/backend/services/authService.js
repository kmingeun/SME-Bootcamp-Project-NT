const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: 'c5aceaf5af4294',
        pass: 'c2e147534bc8f7'
    }
});

exports.sendEmail = (to, subject, html) => {
    const mailOptions = {
        from: 'TEAM-BRIDGE@example.com',
        to,
        subject,
        html
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
};
