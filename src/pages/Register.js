import React from "react";

function Register() {
  return (
    <div
      className="flex justify-center items-center bg-cover h-screen w-screen"
      style={{
        background: `linear-gradient(rgba(255,255,255,0.5),rgba(255, 255, 255,0.5)), url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`,
      }}
    >
      <div className="bg-white xl:w-[40%] lg:w-[50%] md:w-[60%] w-[80%] sm:p-10 p-6  ">
        <p className="sm:text-2xl m-2">CREATE AN ACCOUNT</p>
        <form className="flex flex-wrap" action="">
          <input className="flex-1  md:min-w-[40%] sm:p-2 p-1 sm:my-3 my-2 border-2 outline-none mx-2" placeholder="First Name" type="text" />
          <input className="flex-1  sm:min-w-[40%] sm:p-2 p-1 sm:my-3 my-2 border-2 outline-none mx-2" placeholder="Last Name" type="text" />
          <input className="flex-1  md:min-w-[40%] sm:p-2 p-1 sm:my-3 my-2 border-2 outline-none mx-2" placeholder="username" type="text" />
          <input className="flex-1  md:min-w-[40%] sm:p-2 p-1 sm:my-3 my-2 border-2 outline-none mx-2" placeholder="Email" type="email" />
          <input className="flex-1  md:min-w-[40%] sm:p-2 p-1 sm:my-3 my-2 border-2 outline-none mx-2" placeholder="Password" type="password" />
          <input className="flex-1  sm:min-w-[40%] sm:p-2 p-1 sm:my-3 my-2 border-2 outline-none mx-2" placeholder="Confirm Password" type="password" />
        </form>
        <p className="p-2 text-sm">
          By creating an account, I consent to the processing of my personal
          data in accordance with the <b>PRIVACY POLICY</b>
        </p>
        <button className="px-4 py-2 mx-2 my-4 bg-gray-300">CREATE</button>
      </div>
    </div>
  );
}

export default Register;
