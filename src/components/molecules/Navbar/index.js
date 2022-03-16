import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <nav className="navbar navbar-light px-lg-2 py-4">
      <div className="container-fluid d-flex align-items-center">
        <Link
          className="navbar-brand text-center mp-0 fs-4 text-uppercase fw-medium"
          to="#"
        >
          norm architects
        </Link>

        <div className="ms-auto d-none d-lg-flex">
          <div className="address mx-5 px-5">
            <p className="fs-6 mb-0 fw-medium">Hello World</p>
            <p className="fs-6 mb-0 fw-medium">+62 896 5057 4913</p>
          </div>

          <div className="language d-flex align-items-center mx-5 pe-5">
            <p className="fs-6 mb-0 d-inline-block me-4 fw-bold">EN</p>
            <p className="fs-6 mb-0 d-inline-block">IDN</p>
          </div>
        </div>

        <button
          className="navbar-toggler ms-auto ms-lg-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse mt-3" id="navbarNav">
          <ul className="navbar-nav text-uppercase">
            <li className="nav-item px-0">
              <Link className="nav-link text-end" aria-current="page" to="#">
                work
              </Link>
            </li>
            <li className="nav-item px-0">
              <Link className="nav-link text-end" to="#">
                home
              </Link>
            </li>
            <li className="nav-item px-0">
              <Link className="nav-link text-end" to="#">
                about
              </Link>
            </li>
            <li className="nav-item px-0">
              <Link className="nav-link text-end" to="#">
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default index;
