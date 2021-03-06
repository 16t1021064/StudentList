import React from "react";
import Title from "./Title";
import StudentList from "./StudentList";
import SearchBox from "./SearchBox";
import "./index.module.scss";
import { useState } from "react";
import Modal from "../Modal";
import { useMemo } from "react";
import Pagination from "./Pagination";

import { useEffect } from "react";
import {
  getStudents,
  addStu,
  deleteStu,
  updateStu,
} from "../../api/student.service";

const Table = () => {
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    (async () => {
      fetchAPI();
    })();
  }, []);

  const [modalStatus, setModalStatus] = useState(false);

  const [currentStudent, setCurrentStudent] = useState(null);

  const [searchValue, setSearchValue] = useState(null);

  const [paginationData, setPaginationData] = useState({
    current: 1,
    limit: 5,
    totalPages: 0,
    pageLimit: 5,
  });

  const list = useMemo(() => {
    let tmp = [...studentList];
    console.log(searchValue);
    // search
    if (searchValue) {
      tmp = tmp.filter(
        (student) =>
          student.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
      );
    }

    const totalPages = Math.ceil(tmp.length / paginationData.limit);
    // paginate
    const startIndex =
      paginationData.current * paginationData.limit - paginationData.limit;
    const endIndex = startIndex + paginationData.limit;

    tmp = tmp.slice(startIndex, endIndex);

    setPaginationData({
      ...paginationData,
      totalPages,
    });

    return tmp;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue, studentList, paginationData.current]);

  const fetchAPI = async () => {
    const res = await getStudents();
    setStudentList(res.data);
  };

  const setFormStatus = (status) => {
    if (status === undefined) {
      setModalStatus(!modalStatus);
    } else {
      setModalStatus(status);
    }
  };
  const addStudent = async (student) => {
    await addStu(student);
    fetchAPI();
  };

  const editStudent = async (student) => {
    await updateStu(student._id, {
      name: student.name,
      age: student.age,
      className: student.className,
      schoolName: student.schoolName,
    });
    fetchAPI();
  };

  const deleteStudent = async (id) => {
    await deleteStu(id);
    fetchAPI();
  };

  const getCurrentStudent = (id) => {
    let student = studentList.find((element) => element._id === id);
    setCurrentStudent(student);
    setFormStatus(true);
  };

  const renderForm = () => {
    if (currentStudent === null || currentStudent === undefined) {
      return (
        modalStatus && (
          <Modal
            addStudent={addStudent}
            setFormStatus={setFormStatus}
            title={"Th??m h???c sinh"}
          />
        )
      );
    } else {
      return (
        modalStatus && (
          <Modal
            currentStudent={currentStudent}
            setFormStatus={setFormStatus}
            title={"S???a h???c sinh"}
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
          <SearchBox searchByName={setSearchValue} />
          <StudentList
            studentList={list}
            getCurrentStudent={getCurrentStudent}
            deleteStudent={deleteStudent}
            paginationData={paginationData}
          />
          <Pagination
            paginationData={paginationData}
            setPaginationData={setPaginationData}
            searchValue={searchValue}
          />
        </div>
      </div>
    </div>
  );
};
export default Table;
