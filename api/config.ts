import { HttpMethod } from "types/api/fetch";

const API_URL = process.env.NEXT_API_URL || "http://localhost:4000";

interface AxiosConfig {
  body?: any;
  params?: any;
  path: string;
  method: HttpMethod;
}

const axiosConfig = ({ body, path, method }: AxiosConfig) => {
  return {
    headers: { Authorization: "" },
    baseURL: API_URL,
    data: body,
    url: path,
    method,
  };
};

export default axiosConfig;
