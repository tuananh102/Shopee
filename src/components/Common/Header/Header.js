import React from "react";
import Navbar from "./Navbar";
import HeaderWithSearch from "./HeaderWithSearch";
import "../../../scss/components/Header.scss";
const Header = (props) => {
  return (
    <header id="header">
      <div className="grid wide">
        <Navbar {...props} />
        <HeaderWithSearch t={props.t} />
      </div>
    </header>
  );
};

export default Header;
