import React, { useEffect, useState } from "react";
import { shoesData } from "../../utils/shoesData";
import { addToDataBase } from "../../utils/storeData";
import { toast } from "react-toastify";

const ShoesItem = ({ CartItem, setCartItem }) => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    setShoes(shoesData);
  }, []);

  // Handler for Add to cart button
  const handleAddToCart = (item) => {
    let newCart = [];
    const addedProduct = shoes.find((pd) => pd.id === item.id);
    if (addedProduct) {
      const restProduct = shoes.filter((pd) => pd.id !== item.id);
      item.quantity = item.quantity + 1;
      newCart = [...restProduct, item];
    } else {
      item.quantity = 1;
      newCart = [...CartItem, item];
    }
    setCartItem(newCart);
    addToDataBase(item.id);
    toast.success("Item Added");
  };

  return (
    <>
      <section class="products container mt-5 mb-5 pt-5 pb-5">
        <h2 class="mb-4 text-lg-start text-md-start text-center">Shoes</h2>
        <div class="row g-3 d-flex justify-content-around align-items-center">
          {shoes?.map((s) => (
            <div class="col-lg-4 col-md-6 col- d-flex justify-content-center">
              <div class="card" style={{ width: "18rem" }}>
                <img src={s.image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{s.title}</h5>
                  <p class="card-text">{s.description}</p>
                  <h3>${s.price}</h3>
                  <button
                    class="btn btn-primary btn-md buy-btn"
                    onClick={() => handleAddToCart(s)}
                  >
                    ADD TO CART <i class="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ShoesItem;
