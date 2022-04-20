import axiosClient from "./axiosClient";

const CategoryApi = {
  getAll: () => {
    const url = `/category`;
    return axiosClient.get(url);
  },
  getById: (id) => {
    const url = `/category/${id}`;
    return axiosClient.get(url);
  },
  post: (data) => {
    const url = `/category`;
    return axiosClient.post(url, data);
  },
  put: (id, data) => {
    const url = `/category/${id}`;
    return axiosClient.put(url, data);
  },
};
export default CategoryApi;
