import React from "react";
import { Link } from "react-router-dom";

function Manga({ init }) {
  // const title = `<p>This is ${init.mg_name}</p>`;
  return (
    <div className="col-md-4 mt-4 px-1">
      <div className="card shadow br-5">
        <div className="title-mg-l">
          <div className="m-3 mx-1" style={{ fontSize: "0.9rem" }}>
            <span className="content-l mx-1">5 Phút Trước</span>
            <span className="content-r mx-1">Hot</span>
          </div>
        </div>
        <span
          className="d-inline-block"
          data-toggle="tooltip"
          data-html="true"
          // title={title}
        >
          <Link to={`/chapter?name=${init.sub_name}`}>
            <img
              src={init.media_title + init.sub_name + init.picture_type}
              alt={init.mg_name}
              className="w-100 border-bottom"
            />
          </Link>
        </span>
        <div className="py-2 text-center">
          <strong className="d-block text-title">{init.mg_name}</strong>
          <span className="text-chapter">Chương {init.chapter}</span>
        </div>
      </div>
    </div>
  );
}

export default Manga;
