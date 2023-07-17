import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import headPhone from "../../Assets/images/banner-images/headphone.png";
import tv from "../../Assets/images/banner-images/tv.png";
import xbox from "../../Assets/images/banner-images/xbox.png";

const TopBanner = () => {
  return (
    <>
      <section class="top-banner">
        <div class="img-slider container">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row p-5 d-flex flex-lg-row flex-md-column-reverse flex-column-reverse align-items-center">
                  <div class="col-lg-7 col-md-12 col-">
                    <h1 class="banner-title">Mi LED TV 4A PRO 32</h1>
                    <p class="banner-info">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde, est reprehenderit ipsa aspernatur libero asperiores?
                      Exercitationem excepturi non voluptas sapiente.
                    </p>
                    <h1 class="price">$1289</h1>
                    <button class="btn btn-primary btn-lg buy-btn">
                      ADD TO CART <i class="fas fa-arrow-right"></i>
                    </button>
                  </div>
                  <div class="col-lg-5 col-md-12 col- mb-5">
                    <img src={headPhone} class="d-block w-100" alt="..." />
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row p-5 d-flex flex-lg-row flex-md-column-reverse flex-column-reverse align-items-center">
                  <div class="col-lg-7 col-md-12 col-">
                    <h1 class="banner-title">Mi LED TV 4A PRO 32</h1>
                    <p class="banner-info">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde, est reprehenderit ipsa aspernatur libero asperiores?
                      Exercitationem excepturi non voluptas sapiente.
                    </p>
                    <h1 class="price">$1289</h1>
                    <button class="btn btn-primary btn-lg buy-btn">
                      ADD TO CART <i class="fas fa-arrow-right"></i>
                    </button>
                  </div>
                  <div class="col-lg-5 col-md-12 col- mb-5">
                    <img src={tv} class="d-block w-100" alt="..." />
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row p-5 d-flex flex-lg-row flex-md-column-reverse flex-column-reverse align-items-center">
                  <div class="col-lg-7 col-md-12 col-">
                    <h1 class="banner-title">Mi LED TV 4A PRO 32</h1>
                    <p class="banner-info">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde, est reprehenderit ipsa aspernatur libero asperiores?
                      Exercitationem excepturi non voluptas sapiente.
                    </p>
                    <h1 class="price">$1289</h1>
                    <button class="btn btn-primary btn-lg buy-btn">
                      ADD TO CART <i class="fas fa-arrow-right"></i>
                    </button>
                  </div>
                  <div class="col-lg-5 col-md-12 col- mb-5">
                    <img src={xbox} class="d-block w-100" alt="..." />
                  </div>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev text-warning"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon text-warning"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next text-warning"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon text-warning"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopBanner;
