import React from "react";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Mangatm() {
  let query = useQuery();
  const name = query.get("name");
  const chapter = query.get("chapter");
  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-body">
          <p>
            {name} - {chapter}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mangatm;
