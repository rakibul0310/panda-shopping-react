import React, { useEffect, useState } from "react";
import ShoesItem from "../components/ShoesItem/ShoesItem";
import BagItem from "../components/BagItem/BagItem";
import { getCartFromDb } from "../utils/storeData";
import { shoesData } from "../utils/shoesData";
import { bagsData } from "../utils/bagsData";

const Products = () => {
  const [CartItem, setCartItem] = useState([]);
  const [products, setProducts] = useState([]);

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
      const addedProducts = products.find((product) => product.id === key);
      if (addedProducts) {
        addedProducts.quantity = storedCart[key];
        productOnCart.push(addedProducts);
      }
    }
    setCartItem(productOnCart);
  }, [products]);
  return (
    <>
      <ShoesItem CartItem={CartItem} setCartItem={setCartItem} />
      <BagItem />
    </>
  );
};

export default Products;
