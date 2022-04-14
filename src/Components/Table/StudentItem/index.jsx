import React from "react";

export default function index() {
  return (
    <tr>
      <td>1</td>
      <td>Phan Thế Viễn</td>
      <td>2</td>
      <td>Mẫu giáo nhỡ</td>
      <td>Trường mầm non Hải Phú</td>
      <td>
        <a href="#editEmployeeModal" className="edit" data-toggle="modal">
          <i className="material-icons" data-toggle="tooltip" title="Edit">
            
          </i>
        </a>
        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal">
          <i className="material-icons" data-toggle="tooltip" title="Delete">
            
          </i>
        </a>
      </td>
    </tr>
  );
}
