const express = require('express');
const Product = require('../models/Product');
const auth = require('../middleware/auth');
const role = require('../middleware/role');

const router = express.Router();

router.post('/', [auth, role(['admin', 'product_manager'])], async (req, res) => {
  const { name, merchant_id, price } = req.body;

  try {
    const newProduct = new Product({
      name,
      merchant_id,
      price,
      created_by: req.user.id,
    });

    await newProduct.save();

    res.json(newProduct);
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
  }
});

module.exports = router;
