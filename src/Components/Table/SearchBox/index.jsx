import React from "react";

const SearchBox = () => {
  return (
    <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="Nhập từ khoá" />
      <div className="input-group-append">
        <span className="input-group-text" id="basic-addon2">
          Tìm kiếm
        </span>
      </div>
    </div>
  );
};
export default SearchBox;
