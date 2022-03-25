import React from "react";
import "./Nav.css";
import HomeBurgorDropDown from "./HomeBurgorDropDown";

function Nav({ setCategories }) {
  return (
    <div className="nav">
      <div className="menu">
        <HomeBurgorDropDown />
      </div>
      <img
        className="nav_image"
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
        alt="ERROR 404"
      />
    </div>
  );
}

export default Nav;
