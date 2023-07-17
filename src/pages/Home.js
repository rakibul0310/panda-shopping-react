import React from "react";
import TopBanner from "../components/TopBanner/TopBanner";
import Category from "../components/Categories/Category";
import Shop from "../components/Shop/Shop";

const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <TopBanner />
      <Category />
      <div className="shop">
        <Shop />
      </div>
    </>
  );
};

export default Home;
