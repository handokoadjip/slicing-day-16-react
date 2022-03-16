import { Img2, Img3, Img4 } from "assets/source/image";
import React from "react";

const index = () => {
  return (
    <section className="my-2 my-lg-5 py-2 px-lg-2">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-2">
            <div className="wrapper d-flex align-items-end">
              <figure className="m-0 w-100">
                <img
                  className="h-image-200px w-50 w-lg-100"
                  src={Img2}
                  alt="image-2"
                />
              </figure>
              <h2 className="fw-normal text-uppercase display-3 ms-auto mb-0 d-inline d-lg-none">
                next
              </h2>
            </div>
          </div>
          <div className="col-12 col-lg-2 my-2 my-lg-0 py-2 py-lg-0">
            <div className="wrapper">
              <figure className="m-0 w-100">
                <img className="h-image-200px w-100" src={Img3} alt="image-3" />
              </figure>
            </div>
          </div>
          <div className="col-12 col-lg-4 ms-auto">
            <div className="wrapper">
              <figure className="m-0 w-100">
                <img
                  className="h-image-250px h-image-lg-400px w-100"
                  src={Img4}
                  alt="image-4"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
