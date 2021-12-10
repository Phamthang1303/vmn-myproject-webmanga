import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Mangatm() {
  let query = useQuery();
  const name = query.get("name");
  const chapter = query.get("chapter");

  const [content, setContent] = useState([]);

  useEffect(() => {
    async function fetchAllData() {
      try {
        const data = [];
        for (let i = 1; i <= 52; i++) {
          data.push(
            `http://222.254.16.220:8148/manga/picture/manga-content/dao-hai-tac/content/Chap-1/` +
              i +
              ".jpg"
          );
        }
        setContent(data);
      } catch (error) {
        console.log("Failed fetch all data: " + error);
      }
    }

    fetchAllData();
  }, []);

  const [valueSelect, setValueSelect] = useState("");

  const onChangeSelect = (event, value) => {
    // const value = event.value;
    console.log(value);
    setValueSelect(value);
  };

  return (
    <>
      <div style={{ background: "#00000087" }}>
        <div className="container">
          <div className="card py-4">
            <div className="card-body">
              <p>
                <a className="me-1 text-decoration-none" href="/">
                  Trang chủ
                </a>{" "}
                {">"} {name} {"> Chapter "} {chapter}
              </p>
              <h4>
                {name} Chap {chapter}
              </h4>
              <div className="d-flex justify-content-center">
                <div className="mx-2">
                  <select
                    class="form-select form-select-sm"
                    aria-label="Select Chương"
                    onChange={onChangeSelect}
                    value={valueSelect}
                  >
                    <option selected value="0">
                      Chương {chapter}
                    </option>
                    <option value="1">Chương 1</option>
                    <option value="2">Chương 2</option>
                    <option value="3">Chương 3</option>
                  </select>
                </div>
                <button type="button" class="btn btn-info">
                  Chap sau {">"}
                </button>
                <div>{valueSelect ? <p>{valueSelect}</p> : <p> null</p>}</div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="mt-4" style={{ maxWidth: "800px" }}>
              {content.map((item) => (
                <img className="w-100" src={item} alt="content" />
              ))}
            </div>
          </div>
          <div className=" card mt-4">
            <div className="card-body">
              <div className="d-flex justify-content-center">
                <div className="mx-2">
                  <select
                    class="form-select form-select-sm"
                    aria-label="Select Chương"
                    onChange={onChangeSelect}
                    value={valueSelect}
                  >
                    <option selected value="0">
                      Chương {chapter}
                    </option>
                    <option value="1">Chương 1</option>
                    <option value="2">Chương 2</option>
                    <option value="3">Chương 3</option>
                  </select>
                </div>
                <button type="button" class="btn btn-info">
                  Chap sau {">"}
                </button>
                <div>{valueSelect ? <p>{valueSelect}</p> : <p> null</p>}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mangatm;
