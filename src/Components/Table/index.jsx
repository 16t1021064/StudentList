import React from "react";
import Title from "./Title";
import StudentList from "./StudentList";
import Clearfix from "./Clearfix";
import SearchBox from "./SearchBox";
import "./index.module.scss";
export default function index() {
  return (
    <div className="container-xl">
      <div className="table-reponsive">
        <div className="table-wrapper">
          <Title />
          <SearchBox />
          <StudentList />
          <Clearfix />
        </div>
      </div>
    </div>
  );
}
