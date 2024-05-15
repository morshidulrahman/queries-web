import axios from "axios";

import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { Logout } = useAuth();
  const navigate = useNavigate();
  // axiosSecure.interceptors.response.use(
  //   (res) => {
  //     console.log("agei thameis desease", res);
  //     return res;
  //   },
  //   async (error) => {
  //     console.log("axios inter error", error.message);
  //     if (error.response.status === 401 || error.response.status === 403) {
  //       await Logout();
  //       navigate("/login");
  //     }
  //     return Promise.reject(error);
  //   }
  // );

  return axiosSecure;
};

export default useAxiosSecure;
