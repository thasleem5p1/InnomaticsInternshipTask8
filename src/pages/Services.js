import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <h1>Services</h1>
      <nav>
        <NavLink to="design">Design</NavLink>
        <NavLink to="development">Development</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Services;
