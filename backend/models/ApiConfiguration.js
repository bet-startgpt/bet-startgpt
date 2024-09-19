const mongoose = require('mongoose');

const apiConfigurationSchema = new mongoose.Schema({
  apiName: { type: String, required: true },
  apiKey: { type: String, required: true },
  enabled: { type: Boolean, default: true },
  limit: { type: Number, required: true },  // Limite de requisições da API
  usage: { type: Number, default: 0 }        // Uso atual da API
});

module.exports = mongoose.model('ApiConfiguration', apiConfigurationSchema);
