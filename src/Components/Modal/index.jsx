import React from "react";
import { useState } from "react";
import Button from "../Button";
import { nanoid } from "nanoid";
const Modal = ({addStudent, setFormStatus}) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [className, setClassName] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const getStudentInfo = (e) => {
    e.preventDefault();
    addStudent({id : nanoid(),name, age, className, schoolName });
    setFormStatus(false);
  };
  return (
    <form>
      <div className="modal-header">
        <h4 className="modal-title">
          <b>Thêm học sinh</b>
        </h4>
      </div>
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
        <Button
          color={"success"}
          name={"Đồng ý"}
          onClick={getStudentInfo}
        />
      </div>
    </form>
  );
};

export default Modal;
