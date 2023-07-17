import React from "react";
import aboutImg from "../Assets/images/about.jpg";

const AboutUs = () => {
  return (
    <>
      <section class="container mt-5">
        <div class="row">
          <div class="col-md-6">
            <img src={aboutImg} alt="About Us" class="img-fluid" />
          </div>
          <div class="col-md-6">
            <h1>About Us</h1>
            <p>
              Welcome to Panda Shopping! We are your one-stop destination for
              high-quality shoes, bags, and watches. Our mission is to provide
              stylish and affordable products to our customers, while ensuring
              exceptional customer service.
            </p>
            <p>
              At Panda Shopping, we understand that fashion is a way to express
              your unique style and personality. That's why we carefully curate
              our collection to offer a wide range of trendy and timeless
              designs, catering to all tastes and preferences.
            </p>
            <p>
              We believe in the power of accessories to elevate any outfit, and
              that's why we focus on providing top-notch products. Our team
              works tirelessly to source the best materials and partner with
              reputable manufacturers, ensuring that every item you purchase is
              of the highest quality.
            </p>
            <p>
              Customer satisfaction is our top priority. We strive to create a
              seamless shopping experience for you, from browsing our website to
              receiving your order. Our dedicated support team is always ready
              to assist you with any inquiries or concerns you may have.
            </p>
            <p>
              Thank you for choosing Panda Shopping. We hope you enjoy your
              shopping experience with us and find the perfect shoes, bags, and
              watches to enhance your personal style.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
