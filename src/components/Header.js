import React from "react";
import './Header.css';

const Header = (props) => {
  return (
      <div className=" header">
        <label className="text-left">{props.headerContent}</label>
    </div>
  );
};

export default Header;
