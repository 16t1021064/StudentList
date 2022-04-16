import { nanoid } from "nanoid";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Button from "../Button";
import ErrorMessage from "../ErrorMessage";
const Modal = ({
  addStudent,
  editStudent,
  setFormStatus,
  title,
  currentStudent,
  setCurrentStudent,
}) => {
  const [errorMessage, setErrorMessage] = useState([]);
  const nameRef = useRef();
  const ageRef = useRef();
  const classNameRef = useRef();
  const schoolNameRef = useRef();

  const getStudentInfo = (e) => {
    e.preventDefault();

    if (validateAll()) {
      if (currentStudent === null||currentStudent===undefined) {
        addStudent({
          id: nanoid(),
          name: nameRef.current.value,
          age: ageRef.current.value,
          className: classNameRef.current.value,
          schoolName: schoolNameRef.current.value,
        });
      } else {
        editStudent({
          id: currentStudent.id,
          name: nameRef.current.value,
          age: ageRef.current.value,
          className: classNameRef.current.value,
          schoolName: schoolNameRef.current.value,
        });
        setCurrentStudent(undefined);
      }
      setFormStatus(false);
    }
  };

  const validateAll = () => {
    let errors = [];
    if (isEmpty(nameRef.current.value)) {
      errors.push("•Vui lòng nhập tên!");
    }
    if (isEmpty(ageRef.current.value)) {
      errors.push("•Vui lòng nhập tuổi!");
    } else if (!isAge(ageRef.current.value)) {
      errors.push("•Vui lòng nhập tuổi hợp lệ!");
    }
    if (isEmpty(classNameRef.current.value)) {
      errors.push("•Vui lòng nhập lớp!");
    }
    if (isEmpty(schoolNameRef.current.value)) {
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
  const onCloseForm = () => {
    setFormStatus();
    setCurrentStudent(undefined);
  };
  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.value = currentStudent?.name || "";
      ageRef.current.value = currentStudent?.age || "";
      classNameRef.current.value = currentStudent?.className || "";
      schoolNameRef.current.value = currentStudent?.schoolName || "";
    }
  }, [currentStudent]);

  return (
    <form>
      <div className="modal-header">
        <h4 className="modal-title">
          <b>{title}</b>
        </h4>
      </div>
      {errorMessage.map((msg, pos) => (
        <ErrorMessage key={pos} message={msg}></ErrorMessage>
      ))}
      <div className="modal-body">
        <div className="form-group">
          <label>Tên</label>
          <input
            type="text"
            name="name"
            className="form-control"
            ref={nameRef}
          />
        </div>
        <div className="form-group">
          <label>Tuổi</label>
          <input
            type="number"
            name="age"
            className="form-control"
            ref={ageRef}
          />
        </div>
        <div className="form-group">
          <label>Lớp</label>
          <input
            type="text"
            name="className"
            className="form-control"
            ref={classNameRef}
          />
        </div>
        <div className="form-group">
          <label>Trường</label>
          <input
            type="text"
            name="schoolName"
            className="form-control"
            ref={schoolNameRef}
          />
        </div>
      </div>
      <div className="modal-footer">
        <Button color={"default"} name={"Huỷ"} onClick={onCloseForm} />
        <Button color={"success"} name={"Đồng ý"} onClick={getStudentInfo} />
      </div>
    </form>
  );
};

export default Modal;
