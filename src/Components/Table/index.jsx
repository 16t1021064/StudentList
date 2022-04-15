import React from "react";
import Title from "./Title";
import StudentList from "./StudentList";
import Clearfix from "./Clearfix";
import SearchBox from "./SearchBox";
import "./index.module.scss";
import { useState } from "react";
import Modal from "../Modal";
import { nanoid } from "nanoid";
const Table = () => {
  const [studentList, setStudentList] = useState([
    {
      id: nanoid(),
      name: "Huy",
      age: 2,
      className: "Mẫu giáo nhở",
      schoolName: "Mầm non Hải Phú",
    },
    {
      id: nanoid(),
      name: "Viễn",
      age: 2,
      className: "Mẫu giáo nhở",
      schoolName: "Mầm non Hải Phú",
    },
    {
      id: nanoid(),
      name: "Hải",
      age: 2,
      className: "Mẫu giáo nhở",
      schoolName: "Mầm non Hải Phú",
    },
    {
      id: nanoid(),
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
    setStudentList([...studentList, student]);
  };
  return (
    <div className="container-xl">
      <div className="table-reponsive">
        <div className="table-wrapper">
          <Title setFormStatus={setFormStatus} />
          {modalStatus && <Modal addStudent={addStudent} />}
          <SearchBox />
          <StudentList studentList={studentList} />
          <Clearfix />;
        </div>
      </div>
    </div>
  );
};
export default Table;
