const mongoose = require('mongoose');

const apiRequestSchema = new mongoose.Schema({
  apiName: { type: String, required: true },
  requests: { type: Number, default: 0 },
  limit: { type: Number, required: true },
  resetDate: { type: Date, required: true }
});

module.exports = mongoose.model('ApiRequest', apiRequestSchema);
