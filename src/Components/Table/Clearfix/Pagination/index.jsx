import React from "react";
import "./index.module.scss"
export default function index() {
  return (
    <ul className="pagination">
      <li className="page-item">
        <a href="/" className="page-link">
          Previous
        </a>
      </li>
      <li className="page-item">
        <a href="/" className="page-link">
          1
        </a>
      </li>
      <li className="page-item">
        <a href="/" className="page-link">
          2
        </a>
      </li>
      <li className="page-item active">
        <a href="/" className="page-link">
          3
        </a>
      </li>
      <li className="page-item">
        <a href="/" className="page-link">
          4
        </a>
      </li>
      <li className="page-item">
        <a href="/" className="page-link">
          5
        </a>
      </li>
      <li className="page-item">
        <a href="/" className="page-link">
          Next
        </a>
      </li>
    </ul>
  );
}
