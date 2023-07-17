import React from "react";

const ContactUs = () => {
  return (
    <div class="py-5 my-5 d-flex justify-content-center">
      <section class="container mt-5 d-flex flex-column align-items-center">
        <h1>Contact Us</h1>
        <form class="px-5 w-75">
          <div class="form-group">
            <label for="name">Name:</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div class="form-group my-2">
            <label for="email">Email:</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div class="form-group my-2">
            <label for="message">Message:</label>
            <textarea
              class="form-control"
              id="message"
              rows="5"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary mt-3">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
