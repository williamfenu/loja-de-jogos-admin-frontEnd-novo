import React, { useState } from "react";

const FileField = props => {
  const [file, setFile] = useState({
    name: props.label
  });

  function setFileName(event) {
    if (event.target.files[0]) {
      setFile({ name: event.target.files[0].name });
      props.onChangeImage(event.target.files[0], clearFields);
    }
  }

  function clearFields() {
    setFile({ name: "" });
  }

  return (
    <div className="custom-file">
      <input
        type="file"
        name={props.name}
        className="custom-file-input"
        id={props.id}
        accept={props.accept}
        onChange={setFileName}
      />
      <label className="custom-file-label" htmlFor={props.id}>
        {file.name}
      </label>
    </div>
  );
};

export default FileField;
