import React from "react";
import "./HeaderFooter.css";

const HeaderFooter = (props) => {
  return (
    <div className="footer_header">
      <h3>{props.headerText}</h3>
    </div>
  );
};

export default HeaderFooter;
