import React from "react";

const NumberField = props => {
  return (
    <div className={`form-group col-md-${props.sizeColum}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type="number"
        value={props.value}
        onChange={e => props.onChange(e)}
        ref={props.validation}
        name={props.name}
        id={props.id}
        step={props.step}
        min={props.min}
        className="form-control"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default NumberField;
