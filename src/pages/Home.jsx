// pages/Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getUsers } from '../api/users';
import { useTheme } from '../utils/contexts/ThemeContext';

import PageLoading from '../components/PageLoading';

const Home = () => {
  const [users, setUsers] = useState([]);
  const {darkMode} = useTheme()

  useEffect(() => {
    document.title = "Home | Users Management"
    const fetchUsers = async () => {
      const fetchedUsers = await getUsers();
      setUsers(fetchedUsers);
    };

    fetchUsers();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">User List {users && `(${users.length})`}</h2>
      {users && users.length > 0 ? (
        users.map((user) => (
          <div key={user.id} className="card mb-4">
            <div className="card-body">
              <h3 className="card-title">
                <Link className={`btn-link text-decoration-none ${ darkMode? 'text-primary' : 'text-info'}`} to={`/users/${user.id}`}>
                    {user.name}
                </Link>
              </h3>
              <p className="card-text mb-2">
                <strong>Email:</strong> {user.email}
              </p>
              <p className="card-text mb-2">
                <strong>Username:</strong> {user.username}
              </p>
              <p className="card-text mb-3">
                <strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
              </p>
            </div>
          </div>
        ))
      ) : (
        <PageLoading fallbackContent="No Users Found" />
      )}
    </div>
  );
};

export default Home;
