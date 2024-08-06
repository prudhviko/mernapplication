import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    gender: "",
    date_of_birth: "",
  });

  const { full_name, email, password, gender, date_of_birth } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", formData);
      localStorage.setItem('token', res.data.token);
      alert("User created successfully");
      setFormData({
        full_name: "",
        email: "",
        password: "",
        gender:"",
        date_of_birth:""
      })
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="full_name"
        value={full_name}
        onChange={onChange}
        placeholder="Full Name"
        required
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        placeholder="Password"
        required
      />
      <input
        type="text"
        name="gender"
        value={gender}
        onChange={onChange}
        placeholder="Gender"
      />
      <input
        type="date"
        name="date_of_birth"
        value={date_of_birth}
        onChange={onChange}
        placeholder="Date of Birth"
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
