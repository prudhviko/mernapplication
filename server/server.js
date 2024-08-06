const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const merchantRoutes = require('./routes/merchants');
const productRoutes = require('./routes/products');
const adminRoutes = require('./routes/admin');
const cors = require('cors')
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors())

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connection Succesful");
  })
  .catch((err) => console.log(err));

app.use("/api/auth", authRoutes);
app.use('/api/merchants', merchantRoutes);
app.use('/api/products', productRoutes);
app.use('/api/admin', adminRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
