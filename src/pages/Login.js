import React from 'react'

function Login() {
  return (
    <div
      className="flex justify-center items-center bg-cover h-screen w-screen"
      style={{
        background: `linear-gradient(rgba(255,255,255,0.5),rgba(255, 255, 255,0.5)), url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`,
      }}
    >
      <div className="bg-white xl:w-[30%] lg:w-[40%] md:w-[50%] sm:w-[60%] w-[70%] sm:p-10 p-6  ">
        <p className="sm:text-2xl m-2">SIGN IN</p>
        <form className="flex flex-col " action="">
          <input
            className="flex-1  md:min-w-[40%] sm:p-2 p-1 sm:my-3 my-2 border-2 outline-none mx-2"
            placeholder="username"
            type="text"
          />
          <input
            className="flex-1  md:min-w-[40%] sm:p-2 p-1 sm:my-3 my-2 border-2 outline-none mx-2"
            placeholder="Password"
            type="password"
          />
        </form>
        <p className="p-2 text-sm">Forgot Password</p>
        <button className="px-4 sm:py-2 py-1 mx-2 my-4 bg-gray-300">LOG IN</button>
      </div>
    </div>
  );
}

export default Login