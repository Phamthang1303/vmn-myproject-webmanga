import axiosClient from "./axiosClient";

const productApi = {
  getAllData: (params) => {
    const url = '/api/get-data';
    return axiosClient.get(url, { params });
  },

  getDataByName: (params) => {
    const url = `/api/get-data-by-name`;
    return axiosClient.get(url,{params});
  },
}

export default productApi; 