import { Img1 } from "assets/source/image";
import React from "react";

const index = () => {
  return (
    <section className="mb-0 mb-lg-5 pb-0 pb-lg-5 px-lg-2">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="wrapper">
              <img className="h-image-100 w-100" src={Img1} alt="image-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
