import axiosClient from "./axiosClient";

const productApi = {
  getAll: (params) => {
    const url = `/product`;
    return axiosClient.get(url, { params });
  },
  getById: (id) => {
    const url = `/product/${id}`;
    return axiosClient.get(url);
  },
  post: (data) => {
    const url = `/product`;
    return axiosClient.post(url, data);
  },
  put: (id, data) => {
    const url = `/product/${id}`;
    return axiosClient.put(url, data);
  },
  updatePublished: (id, data) => {
    const url = `/product/updatePublished/${id}`;
    return axiosClient.put(url, data);
  },
};
export default productApi;
