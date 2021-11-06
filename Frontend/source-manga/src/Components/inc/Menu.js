import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Trang chủ
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Hồng xinh gái 01
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Hồng xinh gái 02
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Hồng xinh gái 03
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Select
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="/">
                      Hồng xinh 01
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Hồng xinh 02
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Hồng xinh 03
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
