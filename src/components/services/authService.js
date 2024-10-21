import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL;

export const signup = async (formData) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/users/sign-up`, formData);

    if (response.data.error) {
      throw new Error(response.data.error);
    }

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
