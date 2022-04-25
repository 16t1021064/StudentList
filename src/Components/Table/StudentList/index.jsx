import React from "react";
import StudentItem from "../StudentItem";
const StudentList = ({
  studentList,
  getCurrentStudent,
  deleteStudent,
  paginationData,
}) => {
  let current = paginationData.limit*(paginationData.current-1);
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>STT</th>
          <th>Tên</th>
          <th>Tuổi</th>
          <th>Lớp</th>
          <th>Trường</th>
          <th>Hoạt động</th>
        </tr>
      </thead>
      <tbody>
        {studentList.map((studentItem) => {
          current = ++current;
          return (
            <StudentItem
              studentItem={studentItem}
              key={studentItem._id}
              currentPage={current}
              getCurrentStudent={getCurrentStudent}
              deleteStudent={deleteStudent}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default StudentList;
