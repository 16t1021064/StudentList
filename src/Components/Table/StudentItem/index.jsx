import React from "react";
import Button from "../../Button";

const StudentItem = ({studentItem, pageCurrent}) => {
  return (
    <tr>
      <td>{pageCurrent}</td>
      <td>{studentItem.name}</td>
      <td>{studentItem.age}</td>
      <td>{studentItem.className}</td>
      <td>{studentItem.schoolName}</td>
      <td>
        <Button color={"warning"} name={"Sửa"} />
        <Button color={"danger"} name={"Xoá"} />
      </td>
    </tr>
  );
};
export default StudentItem;
