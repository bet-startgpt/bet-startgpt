const mongoose = require('mongoose');

const permissionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  permissionType: { type: String, required: true },  // Ex.: 'admin', 'edit', 'view'
  module: { type: String, required: true },  // Ex.: 'dashboard', 'API access'
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Permission', permissionSchema);
