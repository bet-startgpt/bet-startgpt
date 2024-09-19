const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },   // Nome de usuário
  email: { type: String, required: true, unique: true },  // E-mail único
  password: { type: String, required: true },   // Senha
  telegramID: { type: String, required: true },  // ID do Telegram para envio de notificações
  plan: { type: String, enum: ['Básico', 'VIP'], default: 'Básico' },  // Plano de assinatura
  tipsEnabled: { type: Boolean, default: true },  // Envio de tips habilitado/desabilitado
  dailyTipsLimit: { type: Number, default: 5 },  // Limite de tips diárias
  subscriptionStatus: { type: String, enum: ['Ativo', 'Expirado'], default: 'Expirado' },  // Status de assinatura
  createdAt: { type: Date, default: Date.now }   // Data de criação do usuário
});

module.exports = mongoose.model('User', userSchema);
