export type HttpMethod = "get" | "post" | "put" | "delete";

export type tEndpoints = {
  [key: string]: {
    path: string;
    method: HttpMethod;
  };
};
