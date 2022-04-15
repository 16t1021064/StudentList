import React from "react";
import Button from "../../Button";

const StudentItem = ({studentItem}) => {
  return (
    <tr>
      <td>{studentItem.id + 1}</td>
      <td>{studentItem.name}</td>
      <td>{studentItem.age}</td>
      <td>{studentItem.class}</td>
      <td>{studentItem.school}</td>
      <td>
        <Button color={"warning"} name={"Sửa"} />
        <Button color={"danger"} name={"Xoá"} />
      </td>
    </tr>
  );
};
export default StudentItem;
