import React from "react";

const InputField = props => {
  return (
    <div className={`form-group col-md-${props.sizeColum}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type="text"
        value={props.value}
        onChange={e => props.onChange(e)}
        className="form-control"
        id={props.id}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default InputField;
