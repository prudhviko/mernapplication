import React, { useState } from "react";
import axios from "axios";

const Verify = ({ type, id }) => {
  const [message, setMessage] = useState("");

  const onClick = async () => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "x-auth-token": token,
        },
      };

      const url = `http://localhost:5000/api/admin/${type}/${id}/verify`;
      const res = await axios.put(url, {}, config);
      setMessage(`${type} verified successfully`);
    } catch (err) {
      console.error(err.response.data);
      setMessage("Verification failed");
    }
  };

  return (
    <div>
      <button onClick={onClick}>Verify {type}</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Verify;
