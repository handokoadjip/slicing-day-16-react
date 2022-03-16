import React from "react";

const index = () => {
  return (
    <section className="px-lg-2">
      <div className="container-fluid">
        <div className="row min-vh-lg-50 pt-5 mt-5">
          <div className="col-lg-5">
            <div className="wrapper d-flex align-items-end h-100">
              <div className="text-uppercase d-flex title-height">
                <h1 className="fw-normal display-3 mp-0">yachtbau</h1>
                <p className="mb-0 mt-2 d-none d-lg-block">lorem</p>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="wrapper d-lg-flex align-items-lg-end h-100">
              <div className="w-100 d-lg-flex justify-content-lg-evenly title-height">
                <div className="language mt-1 d-none d-lg-block">
                  <p className="fs-6 mb-0 d-inline-block fw-bold">EN</p>
                </div>
                <div className="address mt-1">
                  <p className="fs-6 mb-0">Hello World</p>
                  <p className="fs-6 mb-0">+62 896 5057 4913</p>
                </div>
                <h2 className="fw-normal text-uppercase display-3 mb-0 d-none d-lg-block">
                  next
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
