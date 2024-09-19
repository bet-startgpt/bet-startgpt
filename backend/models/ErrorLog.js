const mongoose = require('mongoose');

const errorLogSchema = new mongoose.Schema({
  message: { type: String, required: true },
  stack: { type: String },
  date: { type: Date, default: Date.now },
  level: { type: String, default: 'error' },  // Nível do erro (error, warn, info)
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }  // Opcional, se o erro está associado a um usuário
});

module.exports = mongoose.model('ErrorLog', errorLogSchema);
