import axios from "axios";
import { toast } from "react-toastify";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URI,
  
    headers: {
        'Content-Type': 'application/json'
    },
  });

  axiosInstance.interceptors.request.use(
    function configuration(config) {
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  
  axiosInstance.interceptors.response.use(
    async function (result) {
      if (
        result.data.statusCode == 401 ||
        result.data.type == "SESSION_EXPIRED"
      )
      console.log("result", result);
      return result;
    },
    function (error) {
      // toast.error(error?.message);
      return Promise.reject(error);
    }
  );
  
  export const GET = async (url, params) => {
    let result = await axiosInstance.get(url, { params: params });
    return result;
  };
  
  export const DELETE = async (url, params, data) => {
    let result = await axiosInstance.delete(url, { params, data });
    return result;
  };
  
  export const POST = async (url, body, options) => {
    console.log("Post req==>", url, body);
    try {
      let result = await axiosInstance.post(url, body, options);
      return result;
    } catch (error) {
      return error?.response;
    }
  };
  
  export const PUT = async (url, body, options) => {
    console.log("Put request", url, body);
    let result = await axiosInstance.put(url, body, options);
    return result;
  };
  
  export const PATCH = async (url, body, options) => {
    let result = await axiosInstance.patch(url, body, options);
    return result;
  };
  
  export const MEDIA_UPLOAD_PUT = async (url, body, options) => {
    let result = await axios.put(url, body, options);
    return result;
  };
  