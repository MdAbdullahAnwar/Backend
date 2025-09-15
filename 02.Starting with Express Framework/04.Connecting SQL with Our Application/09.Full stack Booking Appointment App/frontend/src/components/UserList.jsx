import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/users")
      .then((res) => setUsers(res.data));
  }, []);

  return (
    <div className="user-list">
      <h2>Appointments</h2>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;
