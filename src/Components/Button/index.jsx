import React from "react";
import "./index.module.scss";
const Button = (props) => {
  return (
    <button
      type={props.type|'button'}
      className={`btn btn-${props.color}`}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
};

export default Button;
