import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ErrorMessage from "../ErrorMessage";

const InputModal = (props) => {
  const [errorMessage, setErrorMessage] = useState(null);
  useEffect(() => {
    setErrorMessage(props.errorMessage);
  }, [props.errorMessage]);
  return (
    <div className="form-group">
      <label>{props.nameValue}</label>
      <input
        type={props.type}
        name={props.name}
        className="form-control"
        ref={props.refName}
      />
      <ErrorMessage message={errorMessage} />
    </div>
  );
};

export default InputModal;
