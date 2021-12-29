import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../../assets/images/stylehut-logo3.png";
import './Nav.css'


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
              <li className="nav-item nav-menu">
                <a className="nav-link" aria-current="page" href="/">
                  HOME
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li> */}
              <li className="nav-item dropdown nav-menu">
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
                    <a className="dropdown-item" href="/mens/jacket">
                      <span>Jacket</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <span>Hoodies</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <span>T-Shirt</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <span>Shirt</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <span>Pant</span>
                    </a>
                  </li>
                  <li>
                    {/* <hr className="dropdown-divider" /> */}
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <span>Watch</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <span>Shoes</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown nav-menu">
                <a
                  className="nav-link dropdown-toggle"
                  href=""
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  WOMEN
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/women/sweater">
                      <span>Sweater</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/women/hoodie">
                      <span>Hoodie</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/women/hoodie">
                      <span>Cardigans</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/women/hoodie">
                      <span>Tops</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/women/hoodie">
                      <span>Formal Dress</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/women/hoodie">
                      <span>Night Dress</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/women/hoodie">
                      <span>Bodysuit</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/women/hoodie">
                      <span>Bikini</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/women/hoodie">
                      <span>Bra</span>
                    </a>
                  </li>
                  <li>
                    {/* <hr className="dropdown-divider" /> */}
                  </li>
                  <li>
                    <a className="dropdown-item" href="/women/shoes">
                      <span>Shoes</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <span>Watch</span>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown nav-menu">
                <a
                  className="nav-link dropdown-toggle"
                  href=""
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ACCESSORIES
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/women/hoodie">
                      <span>Bags</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/women/hoodie">
                     <span> Belts</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/women/hoodie">
                      <span>Jewelry</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/women/hoodie">
                      <span>Sunglasses</span>
                    </a>
                  </li>
                  <li>
                    {/* <hr className="dropdown-divider" /> */}
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <span>Shoes</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <span>Watch</span>
                    </a>
                  </li>
                </ul>
              </li>

              {/* <li className="nav-item">
                <a className="nav-link" href="">CONTACT US</a>
              </li> */}
            </ul>
            <form className="d-flex">
              <input
                className="form-control shadow-none me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ position: 'relative' }}
              />
              <button style={{ position: 'absolute', color: "rgb(88, 88, 88)", marginLeft: "165px" }} className="btn" type="submit">
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
