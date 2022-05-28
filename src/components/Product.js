import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'

function Product({ item }) {
    return (
      <div className="relative h-80 min-w-[320px] flex justify-center items-center m-2">
        <img className="h-[75%] object-contain " src={item.img} alt="" />
        <div className=" gap-2 justify-center items-center absolute w-full h-full cursor-pointer opacity-0 hover:opacity-100 flex bg-black/25 m-2 z-20 transition-all ease-out duration-150	">
          <div className="bg-white p-2 rounded-full hover:scale-105">
            <ShoppingCartOutlined />
          </div>
          <div className="bg-white p-2 rounded-full transition-all duration-150 ease-out hover:scale-105">
            <SearchOutlined />
          </div>
          <div className="bg-white p-2 rounded-full transition-all ease-out hover:scale-105">
            <FavoriteBorderOutlined />
          </div>
        </div>
      </div>
    );
}

export default Product