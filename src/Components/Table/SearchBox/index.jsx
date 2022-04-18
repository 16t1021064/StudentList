import React from "react";
import { useRef } from "react";

const SearchBox = ({ searchByName }) => {
  const searchValueRef = useRef("");
  const searchFunc = () => {
    setTimeout(() => {
      searchByName(searchValueRef.current.value);
    }, 500);
  };
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Nhập từ khoá"
        ref={searchValueRef}
        onChange={() => searchFunc()}
      />
      <div className="input-group-append">
        <span className="input-group-text" id="basic-addon2">
          Tìm kiếm
        </span>
      </div>
    </div>
  );
};
export default SearchBox;
