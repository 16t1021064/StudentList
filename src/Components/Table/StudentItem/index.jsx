import React from "react";
import Button from "../../Button";

const StudentItem = ({studentItem, pageCurrent, getCurrentStudent, deleteStudent}) => {
  return (
    <tr>
      <td>{pageCurrent}</td>
      <td>{studentItem.name}</td>
      <td>{studentItem.age}</td>
      <td>{studentItem.className}</td>
      <td>{studentItem.schoolName}</td>
      <td>
        <Button color={"warning"} name={"Sửa"} onClick={()=>{getCurrentStudent(studentItem.id)}}/>
        <Button color={"danger"} name={"Xoá"} onClick={()=>deleteStudent(studentItem.id)}/>
      </td>
    </tr>
  );
};
export default StudentItem;
