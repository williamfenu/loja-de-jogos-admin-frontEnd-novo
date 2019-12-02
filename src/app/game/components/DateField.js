import React from "react";

const DateField = props => {
  return (
    <div className={`form-group col-md-${props.sizeColum}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type="date"
        className="form-control"
        id={props.id}
        value={props.value}
        onChange={e => props.onChange(e)}
      />
    </div>
  );
};

export default DateField;
