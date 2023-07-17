import React from "react";

const Footer = () => {
  return (
    <div class="footer-container">
      <footer class="footer-container p-lg-5 p-md-2 p-2">
        <div
          class="d-flex justify-content-center align-items-center
        flex-column m-5"
        >
          <h2>LET'S STAY IN TOUCH</h2>
          <p>Get updates on sales specials and more</p>
          <form class="d-flex flex-lg-row flex-md-column flex-column" action="">
            <input
              class="form-control w-lg-75 w-md-100 w-100"
              type="email"
              placeholder="Enter your email"
            />
            <button class="buy-btn btn btn-primary btn-sm">Send</button>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
