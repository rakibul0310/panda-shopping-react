import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import shoes from "../../Assets/images/categories/shoes.png";
import bag from "../../Assets/images/categories/bag.png";
import watch from "../../Assets/images/categories/watch.png";

const Category = () => {
  return (
    <>
      <section class="category container mt-5 mb-5">
        <h2 class="mb-5 fw-bold">Categories</h2>
        <div class="row g-4">
          <div class="col-lg-4 col-md-6 col-">
            <div class="bg-warning bg-gradient d-flex justify-content-around align-items-center p-3 rounded">
              <h3 className="text-light">Watch</h3>
              <img src={watch} alt="" width="68" height="90" />
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-">
            <div class="bg-danger bg-gradient d-flex justify-content-around align-items-center p-3 rounded">
              <h3 className="text-light">Bag</h3>
              <img src={bag} alt="" width="68" height="90" />
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-">
            <div class="bg-primary bg-gradient d-flex justify-content-around align-items-center p-3 rounded">
              <h3 className="text-light">Shoes</h3>
              <img src={shoes} alt="" width="68" height="90" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
