import React from "react";
import Title from "./Title";
import StudentList from "./StudentList";
import Clearfix from "./Clearfix";
import SearchBox from "./SearchBox";
import "./index.module.scss";
import { useState } from "react";
import Modal from "../Modal";
const Table = () => {
  const [studentList, setStudentList] = useState([
    {
      id: 0,
      name: "Huy",
      age: 2,
      className: "Mẫu giáo nhở",
      schoolName: "Mầm non Hải Phú",
    },
    {
      id: 1,
      name: "Viễn",
      age: 2,
      className: "Mẫu giáo nhở",
      schoolName: "Mầm non Hải Phú",
    },
    {
      id: 2,
      name: "Hải",
      age: 2,
      className: "Mẫu giáo nhở",
      schoolName: "Mầm non Hải Phú",
    },
    {
      id: 3,
      name: "Nghĩa",
      age: 2,
      className: "Mẫu giáo nhở",
      schoolName: "Mầm non Hải Phú",
    },
  ]);
  const [modalStatus, setModalStatus] = useState(false);
  const setFormStatus = () => {
    setModalStatus(!modalStatus);
  };
  const addStudent = (student) => {
    console.log(student);
    // const list = studentList.concat(student);
    // setStudentList(list);
  };
  const renderForm = () => {
    if (modalStatus) {
      return <Modal modalStatus={modalStatus} addStudent={addStudent} />;
    } else {
      return <></>;
    }
  };
  return (
    <div className="container-xl">
      <div className="table-reponsive">
        <div className="table-wrapper">
          <Title setFormStatus={setFormStatus} />
          {renderForm()}
          <SearchBox />
          <StudentList studentList={studentList} />
          <Clearfix />;
        </div>
      </div>
    </div>
  );
};
export default Table;
