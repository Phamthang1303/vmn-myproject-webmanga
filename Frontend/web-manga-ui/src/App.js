import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Components/inc/Footer";
import "./App.css";
import Home from "./Components/page/Home";
import About from "./Components/page/About";
import Contact from "./Components/page/Contact";
import Navbar from "./Components/inc/Navbar";
import Menu from "./Components/inc/Menu";
import Chapter from "./Components/page/child/View page/Chapter";
import Mangatm from "./Components/page/child/View page/Mangatm";

function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <div className="page-container">
          <div className="content-wrap">
          <Menu />
          {/* <h1>Hồng đáng iêu xinh đẹp!!!</h1> */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/chapter">
              <Chapter />
            </Route>
            <Route path="/manga-tm">
              <Mangatm />
            </Route>
          </Switch>
          </div>
            <Footer />
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
