import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import picture1 from "../../../images/your-name-01.jpg";
import picture2 from "../../../images/your-name-02.jpg";
import picture3 from "../../../images/your-name-03.jpg";

import productApi from "../../../../api/productApi"

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Chapter() {
  let query = useQuery();
  const name = query.get("name");

  const [data,setData] = useState([])
  const [dataManga,setDataManga] = useState([])

  useEffect( () => {
    const fetchAllData = async () => {
      try{
        const data = await productApi.getAllData();
        console.log(data);
        setData(data);
        if(name === "Manga 01"){
          setDataManga(data[0])
        }else if(name === "Manga 02"){
          setDataManga(data[1]);
        }else{
          setDataManga(data[2])
        }
      }catch(error){
        console.log('Failed fetch all data: ' + error);
      }
    }

    fetchAllData();
  },[]);

  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-body">
          <p>Trang chủ &gt; {dataManga.mg_name}</p>
          <div className="row">
            <div className="col-md-2">
              <img
                src={
                  name === "Manga 01"
                    ? picture1
                    : name === "Manga 02"
                    ? picture2
                    : picture3
                }
                className="col-md-12"
                alt="manga"
              />
            </div>
            <div className="col-md-10">
              <h6>This is {dataManga.mg_name}</h6>
              <p>Tác giả: {dataManga.author}</p>
              <p>Tình trạng: {dataManga.status === 0?'Đã hoàn thành!':'Đang cập nhật!'}</p>
              <p>Thống kê</p>
              <div>
                <span className="px-1">
                  <button type="button" class="btn btn-info">
                    {dataManga.is_view}
                  </button>
                </span>
                <span className="px-1">
                  <button type="button" class="btn btn-info">
                  {dataManga.is_like}
                  </button>
                </span>
                <span className="px-1">
                  <button type="button" class="btn btn-info">
                  {dataManga.is_share}
                  </button>
                </span>
                <span className="px-1">
                  <button type="button" class="btn btn-info">
                  {dataManga.chapter}
                  </button>
                </span>
              </div>
            </div>
          </div>
          <hr />
          <h5>Danh sách Chương</h5>
          <div className="card mt-4">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <Link to={`/manga-tm?name=${name}&chapter=01`}>
                    <p>Chương 01</p>
                  </Link>
                </div>
                <div className="col-md-6">
                  <Link to={`/manga-tm?name=${name}&chapter=01`}>
                    <p>ngày 321</p>
                  </Link>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-6">
                  <Link to={`/manga-tm?name=${name}&chapter=02`}>
                    <p>Chương 02</p>
                  </Link>
                </div>
                <div className="col-md-6">
                  <Link to={`/manga-tm?name=${name}&chapter=02`}>
                    <p>ngày 123</p>
                  </Link>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chapter;
