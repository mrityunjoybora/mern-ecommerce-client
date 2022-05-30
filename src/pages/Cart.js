import React from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";

function Cart() {
  return (
    <div>
      <Header />
      <div className="p-10 max-w-screen-2xl">
        <p className="text-center font-medium text-3xl">YOUR BAG</p>
        <div className="flex justify-between items-center p-10 gap-10">
          <button className="p-2 font-semibold border-black border-2 cursor-pointer">
            CONTINUE SHOPPING
          </button>
          <div className="sm:flex gap-10 hidden">
            <p className="underline cursor-pointer mx-2">Shopping Bag(2)</p>
            <p className="underline cursor-pointer mx-2">Your Wishlist (0)</p>
          </div>
          <button className="p-2 font-semibold border-black border-2 cursor-pointer text-white bg-black">
            CHECKOUT NOW
          </button>
        </div>

        <div className="flex md:flex-row flex-col md:items-start items-center">
          <div className="flex-3">
            <div className="flex sm:flex-row flex-col items-center">
              <div className="flex md:flex-row flex-col flex-3 sm:items-start items-center">
                <img
                  className="w-48"
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                  alt=""
                />
                <div className="flex  gap-4 flex-col justify-around p-5">
                  <p className="">
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </p>
                  <p>
                    <b>ID:</b> 93813718293
                  </p>
                  <div className="bg-black rounded-full p-2 w-2"></div>
                  <p>
                    <b>Size:</b> 37.5
                  </p>
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-evenly py-5 px-14 items-center gap-4">
                <div className="flex items-center">
                  <Add style={{ fontSize: "1.5rem" }} />
                  <p className="px-2 text-2xl font-semibold">1</p>
                  <Remove style={{ fontSize: "1.5rem" }} />
                </div>
                <p className="text-2xl font-medium">$ 30</p>
              </div>
            </div>
            <div className="flex sm:flex-row flex-col items-center">
              <div className="flex md:flex-row flex-col flex-3 sm:items-start items-center">
                <img
                  className="w-48"
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                  alt=""
                />
                <div className="flex gap-4 flex-col justify-around p-5">
                  <p className="">
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </p>
                  <p>
                    <b>ID:</b> 93813718293
                  </p>
                  <div className="bg-black rounded-full p-2 w-2"></div>
                  <p>
                    <b>Size:</b> 37.5
                  </p>
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-evenly py-5 px-14 items-center gap-4">
                <div className="flex items-center">
                  <Add style={{ fontSize: "1.5rem" }} />
                  <p className="px-2 text-2xl font-semibold">1</p>
                  <Remove style={{ fontSize: "1.5rem" }} />
                </div>
                <p className="text-2xl font-medium">$ 30</p>
              </div>
            </div>
          </div>

          <div className="p-5 flex-1 sm:mt-0 mt-10">
            <p className="text-3xl font-medium p-2">ORDER SUMMARY</p>
            <div className="flex justify-between p-2 font-medium text-lg">
              <span>Subtotal</span>
              <span>$ 80</span>
            </div>
            <div className="flex justify-between p-2 font-medium text-lg">
              <span>Estimated Shipping</span>
              <span>$ 5.90</span>
            </div>
            <div className="flex justify-between p-2 font-medium text-lg">
              <span>Shipping Discount</span>
              <span>$ -5.90</span>
            </div>
            <div className="flex justify-between p-2 font-medium text-lg">
              <span>Total</span>
              <span>$ 80</span>
            </div>

            <button className="p-2 m-2 font-semibold border-black border-2 cursor-pointer mt-5 text-white bg-black">
              CHECKOUT NOW
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart