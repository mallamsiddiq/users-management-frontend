// pages/UserProfile.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUserById } from '../api/users';
import { updateUser, deleteUser } from '../api/usersPost';
import UserDetails from '../components/UserDetails';
import UserUpdate from '../components/UpdateUser';
import PageLoading from '../components/PageLoading';

const UserProfile = () => {
  const { id } = useParams();
  const Navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [editable, setEditable] = useState(false);
  const [editedUser, setEditedUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const fetchedUser = await getUserById(id);
      setUser(fetchedUser);
      setEditedUser({ ...fetchedUser }); // Copy user data for editing
    };

    fetchUser();
  }, [id]);

  const handleEditToggle = () => {
    setEditable(!editable);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleUpdate = async () => {
    // Perform update API call
    await updateUser(id, editedUser);
    // Refresh user data after update
    const updatedUser = await getUserById(id);
    setUser(updatedUser);
    setEditable(false); // Disable editing after update
  };

  const handleDelete = async () => {
    // Perform delete API call
    await deleteUser(id);
    // Redirect to home page after deletion
    Navigate('/');
  };

  return (
    <div className="container mt-5">
      <h2>User Profile</h2>
      {user ? (
        <div className="card">
          <div className="card-body">
            {editable ? (
              <UserUpdate
                user={editedUser}
                handleUpdate={handleUpdate}
                handleChange={handleChange}
                handleEditToggle={handleEditToggle}
                handleDelete={handleDelete}
                setEditable={setEditable}
              />
            ) : (
              <UserDetails user={user} handleEditToggle={handleEditToggle} />
            )}
          </div>
        </div>
      ) : (
        <PageLoading fallbackContent={`user id : ${id} deatails not found`}/>
      )}
    </div>
  );
};

export default UserProfile;
