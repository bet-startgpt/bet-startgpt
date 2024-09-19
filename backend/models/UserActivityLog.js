const mongoose = require('mongoose');

const userActivityLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  activity: { type: String, required: true },  // Exemplo: 'Login', 'Acesso à Dashboard'
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('UserActivityLog', userActivityLogSchema);
