import React from "react";
import StudentItem from "../StudentItem";
const StudentList = ({ studentList }) => {
  // const [pages] = useState(Math.round(studentList.length / dataLimit));
  let pageCurrent = 0;
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
          pageCurrent = ++pageCurrent;
          return (
            <StudentItem
              studentItem={studentItem}
              key={studentItem.id}
              pageCurrent={pageCurrent}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default StudentList;
