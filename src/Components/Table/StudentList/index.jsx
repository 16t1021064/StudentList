import React from "react";
import StudentItem from "../StudentItem"
export default function index() {
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
        <StudentItem />
        <StudentItem />
        <StudentItem />
        <StudentItem />
        <StudentItem />
      </tbody>
    </table>
  );
}
