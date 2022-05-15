import axios from "axios";
import axiosConfig from "api/config";
import { tSigninAxios } from "types/api/auth";
import authEndpoints from "api/endpoints/auth";

const signin = async (body: tSigninAxios) => {
  const request = axiosConfig({ ...authEndpoints.signin, body });

  try {
    const response = await axios(request);
    return response;
  } catch (error: any) {
    console.log(error.response.data.message);
  }

  return false;
};

const auth = {
  signin,
};

export default auth;
