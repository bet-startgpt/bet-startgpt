const mongoose = require('mongoose');

const tipSchema = new mongoose.Schema({
  match: { type: String, required: true },  // Ex.: "Flamengo vs Atlético-MG"
  league: { type: String, required: true },  // Ex.: "Brasileirão"
  prediction: { type: String, required: true },  // Ex.: "Over 2.5"
  odds: { type: Number, required: true },  // Ex.: 1.80
  advancedOdds: { type: Number },  // Odds avançadas, se aplicável
  tacticalAnalysis: { type: String },  // Análise tática, se disponível
  recentPerformance: { type: String },  // Desempenho recente das equipes
  createdAt: { type: Date, default: Date.now }  // Data de criação do tip
});

module.exports = mongoose.model('Tip', tipSchema);
