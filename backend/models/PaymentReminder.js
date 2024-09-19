const mongoose = require('mongoose');

const paymentReminderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  sentAt: { type: Date, default: Date.now },
  message: { type: String, required: true },
});

module.exports = mongoose.model('PaymentReminder', paymentReminderSchema);
