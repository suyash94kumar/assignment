import React from "react";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={props.className}
      id={props.id}
      onClick={props.onClick}
      disabled={props.disableButton}
      tabIndex={props.tabIndex}
      >
    </button>
  );
};

export default Button;
