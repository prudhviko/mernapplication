import React, { useState } from "react";
import axios from "axios";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    merchant_id: "",
    price: "",
  });

  const { name, merchant_id, price } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "x-auth-token": token,
        },
      };

      const res = await axios.post("http://localhost:5000/api/products", formData, config);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
    setFormData({
      name: "",
      merchant_id: "",
      price: "",
    })
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={onChange}
        placeholder="Product Name"
        required
      />
      <input
        type="text"
        name="merchant_id"
        value={merchant_id}
        onChange={onChange}
        placeholder="Merchant ID"
        required
      />
      <input
        type="number"
        name="price"
        value={price}
        onChange={onChange}
        placeholder="Price"
        required
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
