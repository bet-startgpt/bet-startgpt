const express = require('express');
const router = express.Router();
const emailService = require('../services/emailService');

// Rota para enviar um e-mail de notificação
router.post('/send', async (req, res) => {
  const { recipient, subject, message } = req.body;

  try {
    await emailService.sendEmail(recipient, subject, message);
    res.status(200).json({ message: 'E-mail enviado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao enviar e-mail', error: error.message });
  }
});

module.exports = router;
