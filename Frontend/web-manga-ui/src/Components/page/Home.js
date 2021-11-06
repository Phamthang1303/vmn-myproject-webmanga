import React from "react";
import Slider from "../inc/Slider";
import Newmanga from "./child/Home page/Newmanga";
import Vmc from "./child/Home page/Vmc";

function Home() {
  return (
    <div>
      <Slider />
      <div className="container">
        <div className="card mt-4">
          <div className="card-body">
            <Vmc />
            <div className="card mt-4">
              <div className="card-body">
                <Newmanga />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
