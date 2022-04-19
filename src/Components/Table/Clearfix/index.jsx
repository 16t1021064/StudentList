import React from "react";
import Pagination from "./Pagination";
const Clearfix = ({ paginationData , setPaginationData}) => {
  return (
    <div className="clearfix">
      <Pagination paginationData={paginationData} setPaginationData={setPaginationData}/>
    </div>
  );
};
export default Clearfix;
