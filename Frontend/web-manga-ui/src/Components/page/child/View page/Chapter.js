import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

import vwMangaInfo from "../../../../api/vwMangaInfo";
import mangaCategory from "../../../../api/mangaCategory";

// import iconLike from "../../../icon/hand-thumbs-up.svg";
// import iconFolow from "../../../icon/hand-thumbs-up.svg";
// import iconView from "../../../icon/hand-thumbs-up.svg";
import iconBook from "../../../icon/open-book.png";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Chapter() {
  let query = useQuery();
  const name = query.get("name");

  const [data, setData] = useState([]);
  const [dataCategory, setDataCategory] = useState([]);
  const [dataChapter, setDataChapter] = useState([]);

  useEffect(() => {
    async function fetchAllData() {
      try {
        const params = { sub_name: name };
        const data = await vwMangaInfo.getDataBySubName(params);
        setData(data);
        fetchGetListCatrgory(data.category);
        getDataChapter(data.chapter);
      } catch (error) {
        console.log("Failed fetch all data: " + error);
      }
    }

    fetchAllData();
  }, []);

  async function fetchGetListCatrgory(stId) {
    try {
      if (stId !== undefined) {
        const params = { id: stId };
        const data = await mangaCategory.getListCategory(params);
        setDataCategory(data);
      }
    } catch (error) {
      console.log("Failed fetch all data: " + error);
    }
  }

  function getDataChapter(chapter) {
    try {
      const data = [];
      if (chapter > 0) {
        for (let i = 0; i < chapter; i++) {
          data.push(i);
        }
        setDataChapter(data);
      }
    } catch (error) {
      console.log("Failed load chapter: " + error);
    }
  }

  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-body">
          <p>Trang chủ &gt; {data.mg_name}</p>
          <div className="row">
            <div className="col-md-2">
              <img
                src={data.media_title + data.sub_name + data.picture_type}
                className="col-md-12 w-100"
                alt={data.mg_name}
              />
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-9">
              <h5 className="mt-3">This is {data.mg_name}</h5>
              <div className="mb-1">
                <span>Tác giả: {data.author}</span>
              </div>
              <div className="mb-1">
                <span>
                  Tình trạng:
                  {data.status === 0 ? "Đã hoàn thành!" : "Đang cập nhật!"}
                </span>
              </div>
              <div className="mb-3">
                <span className="me-3">Thống kê: </span>
                <span className=" mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-hand-thumbs-up mx-1 mb-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                  </svg>
                  2.315
                </span>
                <span className=" mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-heart-fill mx-1 mb-1"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                    />
                  </svg>
                  8.335
                </span>
                <span className=" mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-eye-fill mx-1 mb-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"></path>
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"></path>
                  </svg>
                  1.466.685
                </span>
              </div>
              <div className="mb-3">
                {dataCategory
                  ? dataCategory.map((item) => (
                      <span className="px-1">
                        <button
                          type="button"
                          class="btn btn-outline-info btn-sm"
                          data-mdb-ripple-color="dark"
                        >
                          {item}
                        </button>
                      </span>
                    ))
                  : undefined}
              </div>
              <div>
                <button type="button" class="btn btn-info rounded-pill btn-sm me-2" style={{width: '8rem'}}>
                  <img className="mx-1 mb-1" src={iconBook} width="20" height="20" alt="Đọc từ đầu" />
                  Đọc từ đầu
                </button>
                <button type="button" class="btn btn-danger rounded-pill btn-sm me-2" style={{width: '8rem'}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-heart mx-1 mb-1"
                    viewBox="0 0 16 16"
                  >
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                  </svg>
                  Theo dõi
                </button>
                <button type="button" class="btn btn-secondary rounded-pill btn-sm me-2" style={{width: '8rem'}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-hand-thumbs-up mx-1 mb-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                  </svg>
                  Thích
                </button>
              </div>
              <div className="my-2" style={{height:'3rem'}}>
                    <p>Giới thiệu về manga</p>
              </div>
            </div>
          </div>
          <hr />
          <h5>Danh sách Chương</h5>
          <div className="card mt-4">
            <div className="card-body">
              <div className="overflow-auto" style={{ maxHeight: "25rem" }}>
                {dataChapter
                  ? dataChapter.map((item) => (
                      <>
                        <div className="row">
                          <div className="col">
                            <Link to={`/manga-tm?name=${name}&chapter=${item}`}>
                              <span className="d-inline-block me-3 py-1">
                                Chương {item}
                              </span>
                            </Link>
                          </div>
                          <div className="col text-end">
                            <Link to={`/manga-tm?name=${name}&chapter=${item}`}>
                              <span className="d-inline-block py-1">
                                {item}/12/2021
                              </span>
                            </Link>
                          </div>
                        </div>
                        <hr style={{ margin: 0 }} />
                      </>
                    ))
                  : undefined}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chapter;
