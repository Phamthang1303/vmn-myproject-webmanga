import React from "react";
import Manga from "./Manga";
import picture1 from "../../../images/your-name-01.jpg";
import picture2 from "../../../images/your-name-02.jpg";
import picture3 from "../../../images/your-name-03.jpg";

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
function Newmanga() {
  return (
    <section className="section bg-c-light">
        <div className="row">
          <div className="col-md-12 mb-4 text-center">
            <h3 className="main-heading">Truyện mới</h3>
            <div className="underline mx-auto"></div>
          </div>
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
    </section>
  );
}

export default Newmanga;
