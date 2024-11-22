import React, { useState, useEffect } from "react";
import { getUsers, deleteUser } from "./apiMethods";
import "./styles.css";

function App() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    const fetchedUsers = await getUsers();
    setUsers(fetchedUsers);
    setLoading(false);
  };

  const handleDelete = async (id) => {
    const isDeleted = await deleteUser(id);
    if (isDeleted) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  const filteredUsers = users.filter((user) =>
    user.first_name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="App">
      <h2>Users from API:</h2>

      <button onClick={fetchUsers}>Load Users</button>

      <input
        type="text"
        placeholder="Filter by name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ margin: "10px 0" }}
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {filteredUsers.map((user) => (
            <li key={user.id} style={{ marginBottom: "10px" }}>
              <span>
                {user.first_name} {user.last_name}
              </span>
              <button
                onClick={() => handleDelete(user.id)}
                style={{ marginLeft: "10px" }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
