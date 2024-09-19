const mongoose = require('mongoose');

const apiLimitSchema = new mongoose.Schema({
  apiName: { type: String, required: true },
  limit: { type: Number, required: true },
  used: { type: Number, default: 0 },  // Número de requisições já usadas
  resetDate: { type: Date }  // Data para resetar o contador de requisições
});

module.exports = mongoose.model('ApiLimit', apiLimitSchema);
