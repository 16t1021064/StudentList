import React from "react";
import { useEffect } from "react";
import Button from "../../Button";
import "./index.module.scss";
const Pagination = ({ paginationData, setPaginationData, searchValue }) => {
  const setPage = (newPage) => {
    setPaginationData({
      ...paginationData,
      current: newPage,
    });
  };
  useEffect(() => {
    setPage(1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);
  return (
    <div className="clearfix">
      <ul className="pagination">
        <li className="page-item">
          <Button
            color={`default page-link ${
              paginationData.current === 1 ? "disabled" : ""
            }`}
            name={"Previous"}
            onClick={() => {
              setPage(paginationData.current - 1);
            }}
            disabled={paginationData.current === 1}
          />
        </li>

        {[...Array(paginationData.totalPages).keys()].map((item) => {
          return (
            <li
              className={`page-item ${
                paginationData.current === item + 1 ? "active" : ""
              }`}
              key={item}
            >
              <Button
                name={item + 1}
                onClick={() => {
                  setPage(item + 1);
                }}
                color={`default page-link`}
              />
            </li>
          );
        })}

        <li className="page-item">
          <Button
            color={`default page-link ${
              paginationData.current === paginationData.totalPages
                ? "disabled"
                : ""
            }`}
            name={"Next"}
            onClick={() => {
              setPage(paginationData.current + 1);
            }}
            disabled={paginationData.current === paginationData.totalPages}
          />
        </li>
      </ul>
    </div>
  );
};
export default Pagination;
