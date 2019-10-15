import React from "react";
import "./style.css";

const Title = props => (
  <div>
    <div className="card title">
      <div className="card-body">
        <h2>{props.label}</h2>
      </div>
    </div>
  </div>
);

export default Title;
