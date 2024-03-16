import axios from "axios";
import nookies from "nookies";

const { "blog.token": token } = nookies.get();

const baseURL = "https://blog-api-delta.vercel.app/";

export const api = axios.create({ baseURL });

if (token) {
  api.defaults.headers["Authorization"] = `Bearer ${token}`;
}
