import React from "react";
import axios from "axios";

function UserCard({ user }) {
  const handleDelete = async () => {
    await axios.delete(`http://localhost:5000/api/users/${user.id}`);
    window.location.reload();
  };

  return (
    <div className="user-card">
      <p><strong>{user.name}</strong></p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default UserCard;
