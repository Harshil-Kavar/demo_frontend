import axios from "axios";
import { LoginUser } from "../models/UserModels";

const baseURL = "http://localhost:5000/api";

const apiAgent = () => {
  const auth = {
    login: async (data: LoginUser) => {
      const result = await axios.post(`${baseURL}/auth/login`, data);
      return result;
    },
  };
  return auth;
};

export default apiAgent;
