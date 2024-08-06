const express = require("express");
const Merchant = require("../models/Merchant");
const auth = require("../middleware/auth");
const User = require("../models/Users")

const router = express.Router();

router.post("/", auth, async (req, res) => {
  const { name, email, date_found } = req.body;

  try {
    const newMerchant = new Merchant({
      name,
      email,
      date_found,
      created_by: req.user.id,
    });

    await newMerchant.save();

    res.json(newMerchant);
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
});

router.post("/:merchantId/users", auth, async (req, res) => {
  const { userIds } = req.body;

  try {
    const merchant = await Merchant.findById(req.params.merchantId);
    if (!merchant) return res.status(404).json({ msg: "Merchant not found" });

    userIds.forEach(async (userId) => {
      const user = await User.findById(userId);
      if (user) {
        user.merchant_id = merchant.id;
        // user.role='admin'
        await user.save();
      }
    });

    res.json({ msg: "Users added to merchant" });
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
});

module.exports = router;
