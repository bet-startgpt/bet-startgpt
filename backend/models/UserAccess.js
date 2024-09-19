const mongoose = require('mongoose');

const userAccessSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  level: { type: Number, required: true }, // 1: Cliente, 2: Admin
});

module.exports = mongoose.model('UserAccess', userAccessSchema);
