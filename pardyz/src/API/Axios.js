import axios from "axios";
const apiEndpoint = process.env.REACT_APP_DEV_URL;

export const getAllInfoAPI = async () => {
  try {
    const response = await axios.get(`${apiEndpoint}/post`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postInfoAPI = async (data) => {
    try {
        const response = await axios.post (`${apiEndpoint}/post`,{
            params:{data}
        });
        console.log (response);
        console.log (response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const getOneInfoAPI = async(id) => {
    try {
        const response = await axios.get (`${apiEndpoint}/post/${id}`);
        console.log(response.data);
        return response.data;
;    } catch (error) {
        console.error(error);
    }
};