const nodemailer = require('nodemailer');

// Serviço para enviar e-mails
exports.sendEmail = async (recipient, subject, message) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',  // Ou Mailgun, SendGrid, etc.
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: recipient,
    subject: subject,
    text: message
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`E-mail enviado para ${recipient}`);
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    throw new Error('Erro ao enviar e-mail.');
  }
};
