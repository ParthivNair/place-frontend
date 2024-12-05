import React from "react";
import SearchComponent from "./SearchComponent";

const NavbarComponent = () => {
  return (
    <nav className="navbar">
      <div>LOGO</div>
      <SearchComponent />
      <div>PROFILE</div>
    </nav>
  );
};

export default NavbarComponent;
