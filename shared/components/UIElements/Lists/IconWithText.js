import React from "react";
import "./IconWithText.css";

const IconWithText = (props) => {
  return (
    <div className="icon_text">
      {props.Icon && <span id="icon_style">{props.Icon}</span>}
      <span>{props.Text}</span>
    </div>
  );
};

export default IconWithText;
