import React from "react";
import "./ButtonItem.module.css";

const ButtonItem = (props) => {
  return (
    <div className="button_container" onClick={props.onClick}>
      <button type={props.type}>{props.label}</button>
    </div>
  );
};

export default ButtonItem;
