import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

function Menu() {
  return (
    <div>
      <nav class="navbar navbar-menu navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand ml-4" href="/category">
            Trang chủ
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main_nav"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="main_nav">
            <ul class="navbar-nav">
              <li class="nav-item dropdown has-megamenu">
                <a
                  class="nav-link dropdown-toggle"
                  href="/category"
                  data-bs-toggle="dropdown"
                >
                  Thể loại
                </a>
                <div
                  class="dropdown-menu megamenu"
                  role="menu"
                  data-bs-popper="none"
                >
                  <div class="row g-3 pl-10 pr-4">
                    <div class="col-lg-2 col-6">
                      <div class="col-megamenu">
                        <h6 class="title">Title Menu One</h6>
                        <ul class="list-unstyled">
                          <li>
                            <a href="/category">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/category">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/category">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/category">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/category">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/category">Custom Menu</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6">
                      <div class="col-megamenu">
                        <h6 class="title">Title Menu Two</h6>
                        <ul class="list-unstyled">
                          <li>
                            <a href="/category">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/category">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/category">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/category">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/category">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/category">Custom Menu</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6">
                      <div class="col-megamenu">
                        <h6 class="title">Title Menu Three</h6>
                        <ul class="list-unstyled">
                          <li>
                            <a href="/category">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/category">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/category">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/category">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/category">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/category">Custom Menu</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6">
                      <div class="col-megamenu">
                        <h6 class="title">Title Menu Four</h6>
                        <ul class="list-unstyled">
                          <li>
                            <a href="/category">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/category">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/category">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/category">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/category">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/category">Custom Menu</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6">
                      <div class="col-megamenu">
                        <h6 class="title">Title Menu Five</h6>
                        <ul class="list-unstyled">
                          <li>
                            <a href="/category">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/category">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/category">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/category">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/category">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/category">Custom Menu</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6">
                      <div class="col-megamenu">
                        <h6 class="title">Title Menu Six</h6>
                        <ul class="list-unstyled">
                          <li>
                            <a href="/category">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/category">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/category">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/category">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/category">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/category">Custom Menu</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item dropdown has-megamenu">
                <a
                  class="nav-link dropdown-toggle"
                  href="/topmanga"
                  data-bs-toggle="dropdown"
                >
                  Top
                </a>
                <div
                  class="dropdown-menu megamenu"
                  role="menu"
                  data-bs-popper="none"
                >
                  <div class="row g-3 pl-10 pr-4">
                    <div class="col-lg-2 col-6">
                      <div class="col-megamenu">
                      <h6 class="title">Title Menu One</h6>
                        <ul class="list-unstyled">
                          <li>
                            <a href="/topmanga">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/topmanga">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/topmanga">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/topmanga">Custom Menu</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6">
                      <div class="col-megamenu">
                        <h6 class="title">Title Menu Two</h6>
                        <ul class="list-unstyled">
                          <li>
                            <a href="/topmanga">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/topmanga">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/topmanga">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/topmanga">Custom Menu</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6">
                      <div class="col-megamenu">
                        <h6 class="title">Title Menu Three</h6>
                        <ul class="list-unstyled">
                          <li>
                            <a href="/topmanga">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/topmanga">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/topmanga">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/topmanga">Custom Menu</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6">
                      <div class="col-megamenu">
                        <h6 class="title">Title Menu Four</h6>
                        <ul class="list-unstyled">
                          <li>
                            <a href="/topmanga">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/topmanga">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/topmanga">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/topmanga">Custom Menu</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6">
                      <div class="col-megamenu">
                        <h6 class="title">Title Menu Five</h6>
                        <ul class="list-unstyled">
                          <li>
                            <a href="/topmanga">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/topmanga">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/topmanga">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/topmanga">Custom Menu</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6">
                      <div class="col-megamenu">
                        <h6 class="title">Title Menu Six</h6>
                        <ul class="list-unstyled">
                          <li>
                            <a href="/topmanga">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/topmanga">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/topmanga">Custom Menu</a>
                          </li>
                          <li>
                            <a href="/topmanga">Custom Menu</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item mx-1 active">
                {" "}
                <a class="nav-link" href="/category">
                  Home{" "}
                </a>{" "}
              </li>
              <li class="nav-item mx-1">
                <a class="nav-link" href="/category">
                  {" "}
                  About{" "}
                </a>
              </li>
              <li class="nav-item mx-1">
                <a class="nav-link" href="/category">
                  {" "}
                  Services{" "}
                </a>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto">
              <li class="nav-item mx-1">
                <a class="nav-link" href="/category">
                  {" "}
                  Menu item{" "}
                </a>
              </li>
              <li class="nav-item mx-1 dropdown">
                <a
                  class="nav-link  dropdown-toggle"
                  href="/category"
                  data-bs-toggle="dropdown"
                >
                  {" "}
                  Dropdown right{" "}
                </a>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li>
                    <a class="dropdown-item" href="/category">
                      {" "}
                      Submenu item 1
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/category">
                      {" "}
                      Submenu item 2{" "}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
