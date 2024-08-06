import React, { useState } from 'react';
import axios from 'axios';

const MerchantForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date_found: '',
  });

  const { name, email, date_found } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'x-auth-token': token,
        },
      };

      const res = await axios.post('http://localhost:5000/api/merchants', formData, config);
      localStorage.setItem('merchantId', res.data._id);
      alert("Merchant Created Succesfully....")
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" value={name} onChange={onChange} placeholder="Merchant Name" required />
      <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
      <input type="date" name="date_found" value={date_found} onChange={onChange} placeholder="Date Found" />
      <button type="submit">Create Merchant</button>
    </form>
  );
};

export default MerchantForm;
