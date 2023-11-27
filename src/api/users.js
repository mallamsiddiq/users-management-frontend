// api/users.js
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

const getUsers = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

const getUserById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with ID ${id}:`, error);
  }
};


export { getUsers, getUserById }