import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} //we can put simple  also navbar-dark bg-dark----- #we can use ` beacuse i can use template literal
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.abouttext}
              </Link>
            </li>
          </ul>

          {/*<form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
  </form>*/}
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`} //to change the color of text Enable Darkmode
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {" "}
              Enable DarkMode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
// it is a proptype which is use to eerror if we pass the integer no in title and abouttext
Navbar.propType = { title: PropTypes.string, abouttext: PropTypes.string };
// if we not pass the title and about then it show set title here text or message in in nav in app.js 44 and 45
Navbar.defaultProps = {
  title: "set title here", //44
  abouttext: " about us",
};
