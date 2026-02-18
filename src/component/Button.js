import React from "react";

const Button = ({ title }) => {
  return (
    <div className="flex ">
      <button
        className="px-6 py-2 m-4 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 font-semibold shadow-sm flex items-center justify-center
        transition-all duration-300 ease-in-out hover:shadow-md hover:scale-[1.03] active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-gray-300 mr-0 "
      >
        <p className="w-max">{title}</p>
      </button>
    </div>
  );
};

export default Button;
