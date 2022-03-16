import { Img5 } from "assets/source/image";
import React from "react";

const index = () => {
  return (
    <section className="my-5 py-5 px-lg-2">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <div className="wrapper">
              <figure className="m-0 w-100">
                <img
                  className="h-image-250px h-image-lg-400px w-100"
                  src={Img5}
                  alt="image-5"
                />
              </figure>
            </div>
          </div>
          <div className="col-lg-4 ms-auto">
            <div className="wrapper w-75">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                cupiditate facilis quam incidunt libero tempora sit voluptas vel
                dolores, numquam nobis, aliquid aperiam?
              </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
