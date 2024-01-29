import axios from "axios";
import { BASE_URL } from "../lib/constant";

export const register = (url, data) => {
  try {
    return axios({
      method: "post",
      url: `${BASE_URL}${url}`,
      data: data,
    });
  } catch (error) {
    console.log("register error" + error);
  }
};
