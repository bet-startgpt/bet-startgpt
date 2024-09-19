const mongoose = require('mongoose');

const teamStatsSchema = new mongoose.Schema({
  teamName: { type: String, required: true },
  gamesPlayed: { type: Number, required: true },
  goalsScored: { type: Number, required: true },
  goalsConceded: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('TeamStats', teamStatsSchema);
