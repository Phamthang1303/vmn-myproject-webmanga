import React, { useEffect, useState } from "react";
import Manga from "./Manga";

import vwMangaInfo from "../../../../api/vwMangaInfo";

function Newmanga() {
  const [data, setData] = useState([]);
  const [dataManga01, setDataManga01] = useState([]);
  const [dataManga02, setDataManga02] = useState([]);

  useEffect(() => {
    async function fetchAllData() {
      try {
        setData([]);
        const response = await vwMangaInfo.getAllData();
        setData(response);
        loadDataManga(response);
      } catch (error) {
        console.log("Failed fetch all data: " + error);
      }
    }

    fetchAllData();
  }, []);

  async function loadDataManga(data) {
    try {
      const data01 = [];
      const data02 = [];
      await data.forEach((data) => {
        if (data.id % 2 === 0) {
          data01.push(data);
        } else {
          data02.push(data);
        }
      });
      
      setDataManga01(data01);
      setDataManga02(data02);
    } catch (error) {
      console.log("Failed load data: " + error);
    }
  }

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
              {dataManga01
                ? dataManga01.map((item) => <Manga init={item} />)
                : undefined}
            </div>
          </div>
          <div className="col">
            <div className="row">
              {dataManga02
                ? dataManga02.map((item) => <Manga init={item} />)
                : undefined}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newmanga;
