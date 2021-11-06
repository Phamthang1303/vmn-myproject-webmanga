import React from "react";
import { Link } from "react-router-dom";

function Manga({ init }) {
  const title = `<p>This is ${init.name}</p>`;
  return (
    <div className="col-md-4 mt-4 px-1">
      <div className="card shadow">
        <span
          class="d-inline-block"
          data-toggle="tooltip"
          data-html="true"
          title={title}
        >
          <Link to={`/chapter?name=${init.name}`}>
          <img src={init.img} className="w-100 border-bottom" alt="Manga 01" />
          </Link>
        </span>
        <div className="card-body">
          <h6>{init.name}</h6>
          <div className="underline">
            <p>This is {init.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manga;
