const mongoose = require('mongoose');

const scheduledNotificationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  message: { type: String, required: true },
  scheduledDate: { type: Date, required: true },
  sent: { type: Boolean, default: false },  // Indica se a notificação já foi enviada
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ScheduledNotification', scheduledNotificationSchema);
