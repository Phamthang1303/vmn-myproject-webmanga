import React from "react";
import Slider from "../inc/Slider";
import Newmanga from "./child/Home page/Newmanga";
import Vmc from "./child/Home page/Vmc";

function Home() {
  return (
    <div>
      <Slider />
      <div className="container">
            <Vmc />
            <div className="card my-4 py-2">
                <Newmanga />
            </div>
        </div>
    </div>
  );
}

export default Home;
