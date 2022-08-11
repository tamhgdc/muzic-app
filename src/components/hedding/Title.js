import React from "react";

const Title = ({ className = "", title, author, color = "text-white" }) => {
  return (
    <div className={`${color}`}>
      <p
        className={`text-sm font-semibold lg:text-lg whitespace-nowrap text-card capitalize ${className}`}
      >
        {title}
      </p>
      <p className="text-xs lg:text-base text-text1">{author}</p>
    </div>
  );
};

export default Title;
