import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-5 py-2 bg-red-500 rounded-lg text-text2"
    >
      {children}
    </button>
  );
};

export default Button;
