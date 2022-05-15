import { tEndpoints } from "types/api/fetch";

const authEndpoints: tEndpoints = {
  signin: {
    path: "/auth/signin",
    method: "post",
  },
};

export default authEndpoints;
