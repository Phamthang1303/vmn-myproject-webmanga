import React from "react";
import Manga from "../page/child/Home page/Manga.js";
import picture1 from "../images/your-name-01.jpg";
import picture2 from "../images/your-name-02.jpg";
import picture3 from "../images/your-name-03.jpg";
import "../css/eachCategory.css";

const initManga = [
  {
    name: "Manga 01",
    img: JSON.stringify(picture1).replace('"', "").replace('"', ""),
  },
  {
    name: "Manga 02",
    img: JSON.stringify(picture2).replace('"', "").replace('"', ""),
  },
  {
    name: "Manga 03",
    img: JSON.stringify(picture3).replace('"', "").replace('"', ""),
  },
];
function EachCategory() {
  return (
    <div>
      <div className="container">
        <h4 className="mx-2 my-2">This is a Category</h4>
        <div className="card my-4 py-2">
          <span className="px-3">Giới thiệu về category</span>
        </div>
        <div className="card my-4 py-2">
          <div className="row">
            <div className="col-md-2 mb-2 mx-4">
              <h6>Thể loại</h6>
            </div>
            <div className="col-md-2 mb-2">
              <select class="form-select mb-2" aria-label="Default select example">
                <option selected>Select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 mb-2 mx-4">
              <h6>Tình trạng</h6>
            </div>
            <div className="col-md-9 mb-2">
              <div className="row">
                <div className="col-md-2 mb-2">
                  <span>
                    <button type="button" class="btn btn-info">
                      Đang cập nhật
                    </button>
                  </span>
                </div>
                <div className="col-md-2 mb-2">
                  <span className="px-1">
                    <button type="button" class="btn btn-info">
                      Đã hoàn thành
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 mb-2 mx-4">
              <h6>Quốc gia</h6>
            </div>
            <div className="col-md-9 mb-2">
              <div>
                  <span className="pr-2">
                    <button type="button" class="btn btn-info">
                      Trung Quốc
                    </button>
                  </span>
                  <span className="px-2">
                    <button type="button" class="btn btn-info">
                      Việt Nam
                    </button>
                  </span>
                  <span className="px-2">
                    <button type="button" class="btn btn-info">
                      Hàn Quốc
                    </button>
                  </span>
                  <span className="px-2">
                    <button type="button" class="btn btn-info">
                      Nhật Bản
                    </button>
                  </span>
                  <span className="px-2">
                    <button type="button" class="btn btn-info">
                      Mỹ
                    </button>
                  </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 mb-2 mx-4">
              <h6>Sắp xếp</h6>
            </div>
            <div className="col-md-3 mb-2">
              <select class="form-select mb-2" aria-label="Default select example">
                <option selected>Ngày đăng giảm dần</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
        <div className="card my-4 py-2">
          <h5 className="mx-2">Selected</h5>
          <div className="row">
            <div className="col">
              <div className="row">
                <Manga init={initManga[0]} />
                <Manga init={initManga[1]} />
                <Manga init={initManga[2]} />
              </div>
            </div>
            <div className="col">
              <div className="row">
                <Manga init={initManga[0]} />
                <Manga init={initManga[2]} />
                <Manga init={initManga[1]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EachCategory;
