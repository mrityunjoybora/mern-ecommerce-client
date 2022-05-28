import { Send } from '@material-ui/icons';
import React from 'react'

function Newsletter() {
  return (
    <div className="flex items-center justify-center h-[60vh] flex-col gap-6 bg-orange-100">
      <p className="md:text-7xl sm:text-5xl text-3xl font-semibold">Newsletter</p>
      <p className="text-2xl font-light md:px-0 px-4 sm:text text-center">
        Get timely updates from your favorite products.
      </p>
      <div className="flex w-[50%] h-10">
        <input className="w-full outline-none border-2 " type="text" />
        <button className='bg-teal-600 px-6'>
                  <Send style={{ color: "white" }}/>
        </button>
      </div>
    </div>
  );
}

export default Newsletter