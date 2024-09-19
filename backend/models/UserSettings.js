const mongoose = require('mongoose');

const userSettingsSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  dailyTipsLimit: { type: Number, default: 5 },
  tipsEnabled: { type: Boolean, default: true }
});

module.exports = mongoose.model('UserSettings', userSettingsSchema);
