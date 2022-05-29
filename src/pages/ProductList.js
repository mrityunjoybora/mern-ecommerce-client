import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

function ProductList() {
  return (
    <div>
      <Header />
      <div className="max-w-screen-2xl px-10 mt-10">
        <p className="font-semibold text-2xl sm:mb-2 ">Dresses</p>
        <div className="flex sm:flex-row flex-col justify-between sm:items-center">
          <div className="flex gap-5 sm:my-5 mt-5 items-center justify-center">
            <p className="text-lg font-semibold ">Filter Products:</p>

            <select className="outline-none border-2 border-black p-1">
              <option disabled selected>
                Color
              </option>
              <option>White</option>
              <option>Black</option>
              <option>Red</option>
              <option>Blue</option>
              <option>Yellow</option>
              <option>Green</option>
            </select>

            <select className="outline-none border-2 border-black p-1">
              <option disabled selected>
                Size
              </option>
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>
          <div className="flex items-center justify-center gap-5 my-5">
            <p className="text-lg font-semibold">Sort Products:</p>
            <select className="outline-none border-2 border-black p-1">
              <option disabled selected>
                Newest
              </option>
              <option>Price (asc)</option>
              <option>Price (desc)</option>
            </select>
          </div>
        </div>
      </div>

      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ProductList;
