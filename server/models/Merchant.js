const mongoose = require("mongoose");

const MerchantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, default: "pending" },
  email: { type: String, required: true, unique: true },
  date_found: { type: Date },
  created_at: { type: Date, default: Date.now },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Merchant", MerchantSchema);
