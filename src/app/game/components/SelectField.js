import React from "react";

const SelectField = props => {
  return (
    <div className={`form-group col-md-${props.sizeColum}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <select
        id={props.id}
        className="form-control"
        value={props.value}
        onChange={e => props.onChange(e)}
      >
        <option defaultValue>selecione...</option>
        {props.mapping && props.customizedMapping
          ? props.mapping.map(mapping => (
              <option
                value={mapping[props.customizedMapping.value]}
                key={mapping.id}
              >
                {mapping[props.customizedMapping.label]}
              </option>
            ))
          : props.mapping.map(mapping => (
              <option value={mapping.value} key={mapping.id}>
                {mapping.label}
              </option>
            ))}
      </select>
    </div>
  );
};

export default SelectField;
