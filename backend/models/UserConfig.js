const mongoose = require('mongoose');

const userConfigSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  tipsPerDay: { type: Number, default: 5 },  // Quantidade de tips por dia
  preferredTeams: { type: [String], default: [] },  // Times preferidos
  receiveNotifications: { type: Boolean, default: true }  // Receber notificações ou não
});

module.exports = mongoose.model('UserConfig', userConfigSchema);
