import React from "react";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";

function Product() {
  return (
    <div>
      <Header />
      <div className="md:flex max-w-screen-2xl px-10 sm:my-10 gap-10">
        <div className="flex-1 flex-shrink-0 sm:p-10 px-4 py-8">
          <img
            className=" sm:h-[80vh]  h-[50vh] w-full sm:object-contain object-cover"
            src="https://i.ibb.co/S6qMxwr/jean.jpg"
            alt=""
          />
        </div>
        <div className="flex-1 sm:p-10 px-4 flex flex-col gap-5">
          <p className="text-2xl">Denim Jumpsuit</p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </p>
          <p className="sm:text-4xl text-3xl">$ 20</p>
          <div className="flex sm:w-auto w-full items-center gap-10 sm:justify-start justify-center">
            <div className=" flex items-center  gap-2">
              <span className="text-lg font-medium">Color</span>
              <div className="bg-black rounded-full p-2 border-2 "></div>
              <div className="bg-blue-500 rounded-full p-2 border-2"></div>
              <div className="bg-gray-500 rounded-full p-2 border-2"></div>
            </div>
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
          <div className="flex items-center gap-10 my-2 sm:justify-start justify-center w-full sm:w-auto md:mb-0 mb-20">
            <div className="flex-shrink-0 md:flex-shrink">
              <Remove />
              <span className="px-4 py-2   border-2 border-gray-500 mx-2 rounded-2xl">
                1
              </span>
              <Add />
            </div>
            <button className="border-black border-2 sm:px-3 px-1 py-3">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Product;
