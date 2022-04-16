import { nanoid } from "nanoid";
import React, { useMemo } from "react";
import { useState } from "react";
import Button from "../Button";
import { useEffect } from "react";
import ErrorMessage from "../ErrorMessage";
const Modal = ({ addStudent, setFormStatus }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [className, setClassName] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [errorMessage, setErrorMessage] = useState([]);

  const getStudentInfo = (e) => {
    e.preventDefault();
    if (validateAll()) {
      addStudent({ id: nanoid(), name, age, className, schoolName });
      setFormStatus(false);
    }
  };

  const validateAll = () => {
    let errors = [];
    if (isEmpty(name)) {
      errors.push("•Vui lòng nhập tên!");
    }
    if (isEmpty(age)) {
      errors.push("•Vui lòng nhập tuổi!");
    } else if (!isAge(age)) {
      errors.push("•Vui lòng nhập tuổi hợp lệ!");
    }
    if (isEmpty(className)) {
      errors.push("•Vui lòng nhập lớp!");
    }
    if (isEmpty(schoolName)) {
      errors.push("•Vui lòng nhập trường!");
    }
    setErrorMessage(errors);
    if (errors.length === 0) {
      return true;
    }
    return false;
  };

  const isAge = (age) => {
    if (parseInt(age) >= 0) {
      return true;
    }
    return false;
  };
  const isEmpty = (value) => {
    if (value === "" || value === 0) {
      return true;
    }
    return false;
  };
  return (
    <form>
      <div className="modal-header">
        <h4 className="modal-title">
          <b>Thêm học sinh</b>
        </h4>
      </div>
      {errorMessage.map((msg, pos) => <ErrorMessage key={pos} message={msg}></ErrorMessage>)}
      <div className="modal-body">
        <div className="form-group">
          <label>Tên</label>
          <input
            type="text"
            name="name"
            className="form-control"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Tuổi</label>
          <input
            type="number"
            name="age"
            className="form-control"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Lớp</label>
          <input
            type="text"
            name="className"
            className="form-control"
            onChange={(e) => {
              setClassName(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Trường</label>
          <input
            type="text"
            name="schoolName"
            className="form-control"
            onChange={(e) => {
              setSchoolName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="modal-footer">
        <Button color={"default"} name={"Huỷ"} />
        <Button color={"success"} name={"Đồng ý"} onClick={getStudentInfo} />
      </div>
    </form>
  );
};

export default Modal;
