import { useState } from "react";
import { NavLink } from "react-router-dom";

const Layout = ( { children } ) => {

  const activeClass = (param) => {
    return param.isActive ? "text-black text-decoration-none active": "text-black text-decoration-none"
  }

  return (
    <div className="w-50 m-auto pt-5">
      <div className="text-center">
        <h2 className="fs-4">#todo</h2>
        <div className="mt-4 d-flex justify-content-around border-bottom border-danger">
          <NavLink to="/" className={activeClass}>  
            <h3
              className="fs-6 mb-0 lh-lg link"
            >
              All
            </h3>
          </NavLink>
          <NavLink to="/active" className={activeClass}>
            <h3
              className="fs-6 mb-0 lh-lg link"
            >
              Active
            </h3>
          </NavLink >
          <NavLink to="/completed" className={activeClass}>
            <h3
              className="fs-6 mb-0 lh-lg link"
            >
              Completed
            </h3>
          </NavLink>
        </div>
      </div>
      { children }
    </div>
  );
};

export default Layout;
