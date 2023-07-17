import React, { useEffect, useState } from "react";
import { shoesData } from "../utils/shoesData";
import { bagsData } from "../utils/bagsData";
import { getCartFromDb } from "../utils/storeData";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [CartItem, setCartItem] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const shoes = shoesData;
    const bags = bagsData;
    setProducts([...shoes, ...bags]);
  }, []);

  // Get cart from storage
  useEffect(() => {
    const storedCart = getCartFromDb();
    let productOnCart = [];
    for (const key in storedCart) {
      const addedProducts = products.find(
        (product) => product.id === storedCart[key]
      );
      if (addedProducts) {
        addedProducts.quantity = storedCart[key];
        productOnCart.push(addedProducts);
      }
    }
    setCartItem(productOnCart);
  }, [products]);

  return (
    <div className="px-5 my-5">
      <section class="container mt-5">
        <h1>Shopping Cart</h1>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {CartItem?.map((c) => (
              <tr>
                <td>{c.title}</td>
                <td>${c.price}</td>
                <td>{c.quantity}</td>
                <td>${c.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div class="text-right">
          <button class="btn btn-primary" onClick={() => navigate("/checkout")}>
            Checkout
          </button>
        </div>
      </section>
    </div>
  );
};

export default Cart;
