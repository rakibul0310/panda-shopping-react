import React from "react";
import { toast } from "react-toastify";

const Checkout = () => {
  const handleCheckout = (e) => {
    toast.success("Order Placed Successfully");
  };
  return (
    <div className="p-5">
      <section class="container mt-5">
        <h1>Checkout</h1>
        <div class="row">
          <div class="col-md-6">
            <h4>Billing Information</h4>
            <form>
              <div class="form-group mt-2">
                <label for="name">Name:</label>
                <input type="text" class="form-control" id="name" required />
              </div>
              <div class="form-group mt-2">
                <label for="email">Email:</label>
                <input type="email" class="form-control" id="email" required />
              </div>
              <div class="form-group mt-2">
                <label for="address">Address:</label>
                <input type="text" class="form-control" id="address" required />
              </div>
              <div class="form-group mt-2">
                <label for="city">City:</label>
                <input type="text" class="form-control" id="city" required />
              </div>
              <div class="form-group mt-2">
                <label for="zip">ZIP Code:</label>
                <input type="text" class="form-control" id="zip" required />
              </div>
            </form>
          </div>
          <div class="col-md-6">
            <h4>Payment Information</h4>
            <form>
              <div class="form-group mt-2">
                <label for="card-number">Card Number:</label>
                <input
                  type="text"
                  class="form-control"
                  id="card-number"
                  required
                />
              </div>
              <div class="form-group mt-2">
                <label for="expiration-date">Expiration Date:</label>
                <input
                  type="text"
                  class="form-control"
                  id="expiration-date"
                  required
                />
              </div>
              <div class="form-group mt-2">
                <label for="cvv">CVV:</label>
                <input type="text" class="form-control" id="cvv" required />
              </div>
            </form>
          </div>
        </div>
        <div class="text-right">
          <button class="btn btn-primary mt-3" onClick={handleCheckout}>
            Place Order
          </button>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
