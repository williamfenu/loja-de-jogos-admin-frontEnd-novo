import React from "react";

const FileField = props => {
  return (
    <div className="custom-file">
      <input
        type="file"
        name={props.name}
        className="custom-file-input"
        id={props.id}
        accept={props.accept}
        onChange={event => props.onChangeImage(event, props.fieldId)}
      />
      <label className="custom-file-label" htmlFor={props.id}>
        {props.label}
      </label>
    </div>
  );
};

export default FileField;
