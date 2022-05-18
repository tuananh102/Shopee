import axiosClient from "./axiosClient";

const salesOrderApi = {
  getAll: (params) => {
    const url = `/salesOrder`;
    return axiosClient.get(url, { params });
  },
  getById: (id) => {
    const url = `/salesOrder/${id}`;
    return axiosClient.get(url);
  },
  post: (data) => {
    const url = `/salesOrder`;
    return axiosClient.post(url, data);
  },
  put: (id, data) => {
    const url = `/salesOrder/${id}`;
    return axiosClient.put(url, data);
  },
  delete: (id) => {
    const url = `/salesOrder/${id}`;
    return axiosClient.delete(url);
  },
};
export default salesOrderApi;
