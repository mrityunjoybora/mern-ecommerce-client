import React from 'react'
import CategoryItem from "./CategoryItem";
import { categories } from "../data";


function Categories({item}) {
  return (
    <div className='flex items-center justify-between py-5 gap-5 sm:flex-row flex-col'>
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Categories