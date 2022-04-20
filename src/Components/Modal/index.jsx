import { nanoid } from "nanoid";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Button from "../Button";
import InputModal from "../InputModal";
const Modal = ({
  addStudent,
  editStudent,
  setFormStatus,
  title,
  currentStudent,
  setCurrentStudent,
}) => {
  const [errorMessage, setErrorMessage] = useState({});
  const nameRef = useRef();
  const ageRef = useRef();
  const classNameRef = useRef();
  const schoolNameRef = useRef();

  const getStudentInfo = (e) => {
    e.preventDefault();

    if (validateAll()) {
      if (currentStudent === null || currentStudent === undefined) {
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
    let errors = {};
    if (isEmpty(nameRef.current.value)) {
      errors.emptyName = "•Vui lòng nhập tên!";
    }
    if (isEmpty(ageRef.current.value)) {
      errors.errorAge = "•Vui lòng nhập tuổi!";
    } else if (!isAge(ageRef.current.value)) {
      errors.errorAge = "•Vui lòng nhập tuổi hợp lệ!";
    }
    if (isEmpty(classNameRef.current.value)) {
      errors.emptyClassName = "•Vui lòng nhập tên lớp!";
    }
    if (isEmpty(schoolNameRef.current.value)) {
      errors.emptySchoolName = "•Vui lòng nhập tên trường!";
    }
    setErrorMessage(errors);
    if (Object.keys(errors).length === 0) {
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
      <div className="modal-body">
        <InputModal
          nameValue={"Tên"}
          type={"text"}
          name={"name"}
          refName={nameRef}
          errorMessage={errorMessage.emptyName ? errorMessage.emptyName : ""}
        />
        <div className="form-group">
          <InputModal
            nameValue={"Tuổi"}
            type={"number"}
            name={"age"}
            refName={ageRef}
            errorMessage={errorMessage.errorAge ? errorMessage.errorAge : ""}
          />
        </div>
        <div className="form-group">
          <InputModal
            nameValue={"Lớp"}
            type={"text"}
            name={"classname"}
            refName={classNameRef}
            errorMessage={
              errorMessage.emptyClassName ? errorMessage.emptyClassName : ""
            }
          />
        </div>
        <div className="form-group">
          <InputModal
            nameValue={"Trường"}
            type={"text"}
            name={"schoolname"}
            refName={schoolNameRef}
            errorMessage={
              errorMessage.emptySchoolName ? errorMessage.emptySchoolName : ""
            }
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
