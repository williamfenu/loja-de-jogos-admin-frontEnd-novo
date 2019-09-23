import React from "react";
import "./style.css";

export default props => (
  <div>
    <div className="card title">
      <div className="card-body">
        <h2>{props.label}</h2>
      </div>
    </div>
  </div>
);
