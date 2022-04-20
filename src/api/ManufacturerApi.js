import axiosClient from "./axiosClient";

const ManufacturerApi = {
  getAll: () => {
    const url = `/manufacturer`;
    return axiosClient.get(url);
  },
  getById: (id) => {
    const url = `/manufacturer/${id}`;
    return axiosClient.get(url);
  },
  post: (data) => {
    const url = `/manufacturer`;
    return axiosClient.post(url, data);
  },
  put: (id, data) => {
    const url = `/manufacturer/${id}`;
    return axiosClient.put(url, data);
  },
};
export default ManufacturerApi;
