const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  plan: { type: String, enum: ['Básico', 'VIP'], required: true },
  paymentStatus: { type: String, enum: ['Aguardando', 'Pago', 'Cancelado'], default: 'Aguardando' },
  paymentReference: { type: String },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, required: true }  // Ex.: data de expiração da assinatura
});

module.exports = mongoose.model('Subscription', subscriptionSchema);
