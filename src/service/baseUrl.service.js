import { Axios } from "axios";
import { BASE_URL } from "../lib/constant";

export const instance = Axios.create({
  baseURL: `${BASE_URL}`,
});
