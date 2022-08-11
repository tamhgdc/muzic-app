import React from "react";

const Headding = ({ children, className = "" }) => {
  return (
    <h2 className={`text-text2 font-medium text-2xl ${className}`}>
      {children}
    </h2>
  );
};

export default Headding;
