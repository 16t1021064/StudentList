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

  const pagination = (current, last) => {
    var delta = 1,
      left = current - delta,
      right = current + delta + 1,
      range = [],
      rangeWithDots = [],
      l;

    for (let i = 1; i <= last; i++) {
      if (i === 1 || i === last || (i >= left && i < right)) {
        range.push(i);
      }
    }

    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push("...");
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  };
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

        {pagination(paginationData.current, paginationData.totalPages).map(
          (item, index) => {
            return (
              <li
                className={`page-item ${
                  paginationData.current === item ? "active" : ""
                }`}
                key={index}
              >
                <Button
                  name={item}
                  onClick={() => {
                    setPage(item);
                  }}
                  color={`default page-link`}
                  disabled={item === "..."}
                />
              </li>
            );
          }
        )}

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
