// pages/UserProfile.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUserById } from '../api/users';
import { updateUser, deleteUser } from '../api/usersPost';
import UserDetails from '../components/UserDetails';
import UserUpdate from '../components/UpdateUser';
import PageLoading from '../components/PageLoading';
import { useError } from '../utils/contexts/ErrorContext';

const UserProfile = () => {
  const { setError } = useError();

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

  
  document.title = `${user? user.name :''} | Users Management`

  const handleEditToggle = () => {
    setEditable(!editable);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleUpdate = async () => {
    // Perform update API call
    let res = await updateUser(id, editedUser);
    if (res && res.success) {
        setError({message:'User Updated successfully!', type: 'success'});
        const updatedUser = await getUserById(id);
        // Refresh user data after update
         // Disable editing after update
        setUser(updatedUser);
        setEditable(false);
    } else {
        setError({message: res.error, type: 'error'});
    }
  };

  const handleDelete = async () => {
    // Perform delete API call
    let res = await deleteUser(id);
    if (res && res.success) {
        setError({message:'User Deleted successfully!', type: 'success'});
    } else {
        setError({message: res.error, type: 'error'});
    }
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
