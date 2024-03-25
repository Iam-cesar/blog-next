import { getAuthToken } from "@shared/utils/getAuthToken";
import axios from "axios";

const token = getAuthToken();

const baseURL = "https://blog-api-delta.vercel.app/";

const Authorization = !!token ? `Bearer ${token}` : null;

const api = axios.create({
  baseURL,
  headers: {
    post: { Authorization },
    patch: { Authorization },
    put: { Authorization },
    delete: { Authorization },
  },
});

export { api };
