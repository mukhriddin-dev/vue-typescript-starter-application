import axios from 'axios';
import type { AxiosInstance } from "axios";

const request:AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 10000,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json'
    }
});

export {request}