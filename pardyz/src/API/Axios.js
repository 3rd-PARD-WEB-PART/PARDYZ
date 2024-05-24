import axios from "axios";
const apiEndpoint = process.env.REACT_APP_DEV_URL;

export const getAllInfoAPI = async () => {
  try {
    const response = await axios.get(`${apiEndpoint}/post`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
