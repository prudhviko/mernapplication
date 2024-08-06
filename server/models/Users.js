const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  full_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  status: { type: String, default: 'active' },
  password: { type: String, required: true },
  gender: { type: String },
  date_of_birth: { type: String },
  created_at: { type: Date, default: Date.now },
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('User', UserSchema);