import React from "react";
import Navbar from "./Navbar";
import HeaderWithSearch from "./HeaderWithSearch";

const Header = (props) => {
  return (
    <header id="header">
      <div className="grid wide">
        <Navbar {...props} />
        <HeaderWithSearch />
      </div>
    </header>
  );
};

export default Header;
