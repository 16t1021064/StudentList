import React from "react";
import Button from "../../Button";
import "./index.module.scss";
const Title = ({setFormStatus}) => {
  return (
    <div className="table-title">
      <div className="row">
        <div className="col-sm-9">
          <h2>
            Danh sách <b>học sinh</b>
          </h2>
        </div>
        <div className="col-sm-3">
          <Button color={"success"} name={"Thêm học sinh"} onClick={setFormStatus}/>
        </div>
      </div>
    </div>
  );
};
export default Title;
