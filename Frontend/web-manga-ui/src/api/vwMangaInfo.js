import axiosClient from "./axiosClient";

const vwMangaInfo = {
  getAllData: (params) => {
    const url = '/api/get-data-custom';
    return axiosClient.get(url, { params });
  },

  getDataByName: (params) => {
    const url = `/api/get-data-custom-by-name`;
    return axiosClient.get(url,{params});
  },

  getDataBySubName: (params) => {
    const url = `/api/get-data-custom-by-sub-name`;
    return axiosClient.get(url,{params});
  },
}

export default vwMangaInfo; 