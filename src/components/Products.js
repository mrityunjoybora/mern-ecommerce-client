import React from "react";
import Product from "./Product";
import { popularProducts } from "../data";

function Products() {
  return (
    <div className="flex flex-wrap justify-evenly">
      {popularProducts.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Products;
