import React, { useState } from "react";
import Button from "../../../Button";
import "./index.module.scss";
const Pagination = ({ studentList, pageLimit, studentLimit }) => {
  // const [pages] = useState(Math.round(studentList.length / studentLimit)||5);
  const [currentPage, setCurrentPage] = useState(1);

  const goToNextPage = () => {
    setCurrentPage((page) => page + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((page) => page - 1);
  };

  const changePage = (e) => {
    const pageNumber = Number(e.target.value);
    setCurrentPage(pageNumber);
  };

  const getPaginatedStudent = () => {
    const startIndex = currentPage * studentLimit - studentLimit;
    const endIndex = startIndex + studentLimit;
    return studentList.slice(startIndex, endIndex);
  };

  const getPaginatedGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };
  return (
    <ul className="pagination">
      <li className="page-item">
        <Button
          color={`default page-link${currentPage === 1 ? "disabled" : ""}`}
          name={"Previous"}
          onClick={goToPreviousPage}
        />
      </li>
      {getPaginatedGroup().map((item, index) => {
        <li className="page-item" key={index}>
          <Button
            name={"Next"}
            onClick={changePage}
            color={`default page-link ${currentPage === item ? "active" : null}`}
          />
        </li>;
      })}
      <li className="page-item">
        <Button
          color={`default page-link${currentPage === 5 ? "disabled" : ""}`}
          name={"Next"}
          onClick={goToNextPage}
        />
      </li>
    </ul>
  );
};
export default Pagination;
