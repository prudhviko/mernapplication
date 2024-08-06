import React, { useState } from "react";
import axios from "axios";

const AddUsersToMerchant = () => {
  const [userIds, setUserIds] = useState("");
  const merchantId = localStorage.getItem("merchantId");
  const onChange = (e) => setUserIds(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "x-auth-token": token,
        },
      };

      const res = await axios.post(
        `http://localhost:5000/api/merchants/${merchantId}/users`,
        { userIds: userIds.split(",") },
        config
      );
      alert("Users added to merchant");
      setUserIds("")
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={userIds}
        onChange={onChange}
        placeholder="User IDs (comma separated)"
        required
      />
      <button type="submit">Add Users</button>
    </form>
  );
};

export default AddUsersToMerchant;
