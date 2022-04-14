import React from "react";
import "./index.module.scss"
export default function index() {
  return (
      <div className="table-title">
        <div className="row">
          <div className="col-sm-9">
            <h2>
              Danh sách <b>học sinh</b>
            </h2>
          </div>
          <div className="col-sm-3">
            <a
              href="#addEmployeeModal"
              className="btn btn-success"
              data-toggle="modal"
            >
              <i className="material-icons"></i> <span>Thêm học sinh</span>
            </a>
          </div>
        </div>
      </div>
  );
}
