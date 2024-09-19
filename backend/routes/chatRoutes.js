const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

// Rota para perguntar ao ChatGPT
router.post('/ask', chatController.askChatGPT);

module.exports = router;
