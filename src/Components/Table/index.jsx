import React from "react";
import Title from "./Title";
import StudentList from "./StudentList";
import Clearfix from "./Clearfix";
import SearchBox from "./SearchBox";
import "./index.module.scss";
import { nanoid } from "nanoid";
import { useState } from "react";
import Modal from "../Modal";
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
  const [currentStudent, setCurrentStudent] = useState(null);
  const setFormStatus = (status) => {
    if (status === undefined) {
      setModalStatus(!modalStatus);
    } else {
      setModalStatus(status);
    }
  };

  const addStudent = (student) => {
    setStudentList([...studentList, student]);
  };
  const editStudent = (student) => {
    const tmp = [...studentList];
    const index = tmp.findIndex(ele => ele.id === student.id);
    if(index < 0) {
      return;
    }

    tmp[index] = student;
    setStudentList(tmp);
  };
  const getCurrentStudent = (id) => {
    let student = studentList.find((element) => element.id === id);
    setCurrentStudent(student);
    setFormStatus(true);
  };
  const renderForm = () => {
    if (currentStudent === null) {
      return (
        modalStatus && (
          <Modal
            addStudent={addStudent}
            setFormStatus={setFormStatus}
            title={"Thêm học sinh"}
          />
        )
      );
    } else {
      return (
        modalStatus && (
          <Modal
            currentStudent={currentStudent}
            setFormStatus={setFormStatus}
            title={"Sửa học sinh"}
            editStudent={editStudent}
            setCurrentStudent={setCurrentStudent}
          />
        )
      );
    }
  };
  return (
    <div className="container-xl">
      <div className="table-reponsive">
        <div className="table-wrapper">
          <Title setFormStatus={setFormStatus} />
          {renderForm()}
          <SearchBox />
          <StudentList
            studentList={studentList}
            getCurrentStudent={getCurrentStudent}
          />
          <Clearfix />;
        </div>
      </div>
    </div>
  );
};
export default Table;
