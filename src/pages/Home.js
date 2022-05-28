import React from "react";
import Categories from "../components/Categories";
import Header from "../components/Header";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="">
      <Header />
      <Slider />
      <div className="max-w-screen-2xl px-10">
        <Categories />
        <Products />
      </div>
          <Newsletter />
          <Footer/>
    </div>
  );
}

export default Home;
