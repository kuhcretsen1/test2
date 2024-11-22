/*
  Goto https://reqres.in/ for documentation on this api.
  
  If you haven't used axios, documentation here: https://github.com/axios/axios
  OR use any method / library you're comfortable with to perform the request(s).

  **** These stubs are just provided as a convienece, ****
  **** feel free to change whatever you like to accomplish the goal. ****
*/

import axios from "axios";

const baseUrl = "https://reqres.in/api";

export const getUsers = async () => {
  try {
    const response = await axios.get(`${baseUrl}/users`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

// Bonus:
export const deleteUser = async (id) => {
  try {
    await axios.delete(`${baseUrl}/users/${id}`);
    return true;
  } catch (error) {
    console.error("Error deleting user:", error);
    return false;
  }
};

