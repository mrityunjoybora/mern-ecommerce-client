import React from "react";

function CategoryItem({ item }) {
  return (
    <div className="relative w-full h-[30vh] sm:h-[90vh]">
      <img className="object-cover h-full w-full" src={item.img} alt="" />
      <div className="absolute flex flex-col items-center justify-center h-full w-full top-0  m-auto">
        <p className="text-white mb-5">{item.title}</p>
        <button className="bg-white text-gray-500 p-3 cursor-pointer font-semibold transition-all duration-150 ease-out hover:scale-105">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}

export default CategoryItem;
