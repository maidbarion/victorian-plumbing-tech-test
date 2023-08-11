import axios, { AxiosResponse } from "axios";
const { REACT_APP_PUBLIC_API_URL } = process.env;
const { REACT_APP_API_KEY } = process.env;

const headers: any = {};

// Not currently used, including for scalability
export const GET = (url: string): Promise<AxiosResponse> => {
  return axios.get(`${REACT_APP_PUBLIC_API_URL}/${url}?apikey=${REACT_APP_API_KEY}`);
};

export const POST = (url: string, data: any): Promise<AxiosResponse> => {
  return axios(`${REACT_APP_PUBLIC_API_URL}/${url}?apikey=${REACT_APP_API_KEY}`, {
    method: "POST",
    headers,
    data,
  });
};
