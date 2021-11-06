import React from "react";
import { useLocation, Link } from "react-router-dom";
import picture1 from "../../../images/your-name-01.jpg";
import picture2 from "../../../images/your-name-02.jpg";
import picture3 from "../../../images/your-name-03.jpg";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Chapter() {
  let query = useQuery();
  const name = query.get("name");
  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-body">
          <p>Trang chủ &gt; {name}</p>
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
              <h6>This is {name}</h6>
              <p>Tác giả: Author</p>
              <p>Tình trạng: Đang cập nhật</p>
              <p>Thống kê</p>
              <div>
                <span className="px-1">
                  <button type="button" class="btn btn-info">
                    button 01
                  </button>
                </span>
                <span className="px-1">
                  <button type="button" class="btn btn-info">
                    button 02
                  </button>
                </span>
                <span className="px-1">
                  <button type="button" class="btn btn-info">
                    button 03
                  </button>
                </span>
                <span className="px-1">
                  <button type="button" class="btn btn-info">
                    button 04
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
                  <Link>
                    <p>ngày 321</p>
                  </Link>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-6">
                  <Link>
                    <p>Chương 02</p>
                  </Link>
                </div>
                <div className="col-md-6">
                  <Link>
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
