const express = require('express');
const Merchant = require('../models/Merchant');
const Product = require('../models/Product');
const auth = require('../middleware/auth');
const role = require('../middleware/role');

const router = express.Router();

router.put('/merchant/:id/verify', [auth, role(['admin', 'authorizer'])], async (req, res) => {
  try {
    const merchant = await Merchant.findById(req.params.id);
    if (!merchant) return res.status(404).json({ msg: 'Merchant not found' });

    merchant.status = 'verified';
    await merchant.save();

    res.json(merchant);
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
  }
});

router.put('/product/:id/verify', [auth, role(['admin', 'verifier'])], async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ msg: 'Product not found' });

    product.status = 'verified';
    await product.save();

    res.json(product);
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
  }
});

module.exports = router;
