import React from "react";
import "../css/Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h5>THICC MEMES INC</h5>
          </div>
          {/* Column2 */}
          <div className="col">
            <h5>Stuff</h5>
          </div>
          {/* Column3 */}
          <div className="col">
            <h5>WELL ANOTHER COLUMN</h5>
          </div>
        </div>
        <hr />
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <p className="list-unstyled">
              <li>342-420-6969</li>
              <li>Moscow, Russia</li>
              <li>123 Streeet South North</li>
            </p>
          </div>
          {/* Column2 */}
          <div className="col">
            <ui className="list-unstyled">
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <ui className="list-unstyled">
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
