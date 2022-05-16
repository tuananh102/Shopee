import axiosClient from "./axiosClient";

const accountApi = {
  // getAll: (params) => {
  //   const url = `/product`;
  //   return axiosClient.get(url, { params });
  // },
  // getById: (id) => {
  //   const url = `/product/${id}`;
  //   return axiosClient.get(url);
  // },
  post: (data, type) => {
    const url = `/account/${type}`;
    return axiosClient.post(url, data);
  },
};
export default accountApi;
