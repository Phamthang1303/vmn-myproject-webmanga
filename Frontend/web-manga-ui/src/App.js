import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Components/inc/Footer";
import "./App.css";
// components - page
import Home from "./Components/page/Home";
import About from "./Components/page/About";
import Contact from "./Components/page/Contact";
import EachCategory from "./Components/page/eachCategory"
import TopManga from "./Components/page/topManga"
// components - inc
import Navbar from "./Components/inc/Navbar";
import Menu from "./Components/inc/Menu";
// components - page - child
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
            <Route path="/category">
              <EachCategory />
            </Route>
            <Route path="/topmanga">
              <TopManga />
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
