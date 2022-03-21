import React from "react";
import Navbar from "./Navbar";
import HeaderWithSearch from "./HeaderWithSearch";
import "../../../scss/components/Header.scss";
const Header = (props) => {
  return (
    <header id="header">
      <div className="grid wide">
        <div className="row">
          <Navbar {...props} />
        </div>
        <div className="row">
          <HeaderWithSearch t={props.t} />
        </div>
      </div>
    </header>
  );
};

export default Header;
