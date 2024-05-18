import React from "react";
import "../../admin.css"

const AdminLogin = () => {
  document.title = `Chirag | Login`;
  let inputClass =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black  block w-full p-3 ";
  let labelClass =
    "block mb-2  text-sm font-medium text-gray-900 dark:text-white";
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-200">
        <div className=" w-1/3 shadow-xl  rounded-xl p-5 bg-white">
          <div className="mb-6 ">
            <label htmlFor="email" className={labelClass}>
              Username
            </label>
            <input
              type="email"
              id="email"
              className={inputClass}
              placeholder="admin@gmail.com"
              required=""
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className={labelClass}>
              Password
            </label>
            <input
              type="password"
              id="password"
              className={inputClass}
              placeholder="•••••••••"
              required=""
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="text-white  bg-gray-950 hover:bg-gray-800  font-medium rounded-lg text-sm  sm:w-auto px-5 py-3 text-center "
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
