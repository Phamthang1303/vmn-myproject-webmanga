import axiosClient from "./axiosClient";

const mangaCategory = {
  getAllData: (params) => {
    const url = '/api/get-data-custom';
    return axiosClient.get(url, { params });
  },

  getListCategory: (params) => {
    const url = `/api/get-category`;
    return axiosClient.get(url,{params});
  },
}

export default mangaCategory; 