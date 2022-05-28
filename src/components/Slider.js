import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import React, { useState } from "react";
import { sliderItems } from "../data";

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 1);
    } else {
      setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 0);
    }
    };

  return (
    <div className="flex relative h-[90vh] w-full transition-all overflow-hidden">
      <div
        className="bg-gray-300 rounded-full h-10 w-10 flex items-center justify-center absolute top-0 bottom-0 m-auto left-4 opacity-50 z-10 cursor-pointer"
        onClick={() => handleClick("left")}
      >
        <ArrowLeft />
      </div>

      <div
        className="flex transition-all ease-out"
        style={{ transform: `translateX(${slideIndex * -100}vw)` }}
      >
        {sliderItems.map((item) => (
          <div className="flex items-center w-screen" key={item.id}>
            <div className=" flex-1  hidden md:block ">
              <img className="lg:pt-[20vh] object-cover" src={item.img} alt="" />
            </div>

            <div className="flex-1 p-12">
              <p className="md:text-7xl sm:text-5xl text-3xl ">{item.title}</p>
              <p className="my-12 text-xl font-medium tracking-wide">
                {item.desc}
              </p>
              <button className="p-2 text-xl bg-transparent cursor-pointer border-2 border-black ">
                SHOP NOW
              </button>
            </div>
          </div>
        ))}
      </div>

      <div
        className="bg-gray-300 rounded-full h-10 w-10 flex items-center justify-center absolute top-0 bottom-0 m-auto right-4 opacity-50 z-10 cursor-pointer"
        onClick={() => handleClick("right")}
      >
        <ArrowRight className="" />
      </div>
    </div>
  );
}

export default Slider;
