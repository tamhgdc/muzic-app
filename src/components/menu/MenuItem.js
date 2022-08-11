import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const MenuItem = ({ children, icon, to = "/" }) => {
  return (
    <div className="cursor-pointer mb-5">
      <NavLink to={to} className="flex gap-x-2 items-center nav-link">
        <i>{icon}</i>
        <p>{children}</p>
      </NavLink>
    </div>
  );
};

MenuItem.propTypes = {
  icon: PropTypes.any,
  children: PropTypes.node,
  to: PropTypes.string,
};

export default MenuItem;
