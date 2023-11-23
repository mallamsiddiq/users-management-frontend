import axios from 'axios';

const BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

const handleRequest = async (request, success_code) => {
  try {
    const response = await request();
    // console.log(response)
    return (response.status === success_code) ?{
        // Successful POST request (status code 201 Created)
        success: true,
        data: response.data, // Assuming the API returns the created resource
    }:
    {
        success: false,
        error: (response.data['error']),
    }
  } catch (error) {
    return {
        success: false,
        error: error,
    }
  }
}

const addUser = async (user) => {
  return handleRequest(() => axios.post(BASE_URL, user), 201);
};

const updateUser = async (id, user) => {
  return handleRequest(() => axios.put(`${BASE_URL}/${id}`, user), 200);
};

const deleteUser = async (id) => {
  return handleRequest(() => axios.delete(`${BASE_URL}/${id}`), 200);
};

export { addUser, updateUser, deleteUser };