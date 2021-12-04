import React from "react";
import Manga from "../page/child/Home page/Manga.js";
import picture1 from "../images/your-name-01.jpg";
import picture2 from "../images/your-name-02.jpg";
import picture3 from "../images/your-name-03.jpg";

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
function TopManga() {
  return (
    <div>
      <div className="container">
        <h4 className="mx-2 my-2">This is a TopManga</h4>
        <div className="card my-4 py-2"></div>
        <div className="card my-4 py-2">
          <div className="row">
            <div className="col-md-2 mb-4 mx-4"><span>Thể loại</span></div>
            <div className="col-md-9 mb-4"><span>Thể loại</span></div>
          </div>
          <div className="row">
            <div className="col-md-12 mb-4 mx-4"><span>Tình trạng</span></div>
          </div>
          <div className="row">
            <div className="col-md-12 mb-4 mx-4"><span>Quốc gia</span></div>
          </div>
        </div>
        <div className="card my-4 py-2">
          <h6>Selected</h6>
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

export default TopManga;
