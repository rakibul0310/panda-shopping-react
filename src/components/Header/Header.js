import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import logo from "../../Assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <section class="navigation container mt-3 mb-3">
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              <img src={logo} alt="" width={160} height={40} />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              {/* <form class="search-form d-flex w-50 ms-auto rounded-3">
                <input
                  class="form-control border-0"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn" type="submit">
                  <i class="fas fa-search"></i>
                </button>
              </form> */}
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link fs-5 active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link fs-5" to="/products">
                    Products
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link fs-5" to="/cart">
                    Cart
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link fs-5" to="/about">
                    About us
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link fs-5" to="/contact">
                    contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Header;
