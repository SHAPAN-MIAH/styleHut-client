import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../../assets/images/stylehut-logo3.png";

const Nav = () => {
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light pt-3 pb-5">
        <div className="container">
          <a className="navbar-brand" href="#">
            <div id="mainlogo">
              <img style={{ width: "150px" }} src={logo} />
            </div>
          </a>
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
                <a className="nav-link" aria-current="page" href="#">
                  HOME
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li> */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  MENS
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  WOMEN
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Sweater
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Hoodie
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Shoes
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link">CONTACT US</a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ position: 'relative' }}
              />
              <button style={{ position: 'absolute', color: "rgb(88, 88, 88)", marginLeft: "160px" }} className="btn" type="submit">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
