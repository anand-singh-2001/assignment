import React from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const Navbar = ({ dark, setDark }) => {
  return (
    <div className={(dark && "dark_mode navbar") || "navbar"}>
      <button className="nav_btn" onClick={() => setDark(!dark)}>
        {dark ? (
          <BsFillSunFill size={20} color="white" />
        ) : (
          <BsFillMoonFill size={20} />
        )}
      </button>
    </div>
  );
};

export default Navbar;
