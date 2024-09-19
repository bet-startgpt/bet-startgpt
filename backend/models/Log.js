const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  activity: { type: String, required: true },  // Descrição da atividade ou erro
  type: { type: String, enum: ['activity', 'error'], required: true },  // Tipo de log: atividade ou erro
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Log', logSchema);
