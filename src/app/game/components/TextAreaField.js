import React from "react";

const TextAreaField = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <textarea
        className="form-control"
        value={props.value}
        ref={props.validation}
        name={props.name}
        onChange={e => props.onChange(e)}
        id={props.id}
        rows={props.rows}
      ></textarea>
    </div>
  );
};

export default TextAreaField;
