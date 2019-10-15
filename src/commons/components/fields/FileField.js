import React, { useState } from "react";

const FileField = props => {
  const [arquivo, setArquivo] = useState({
    nome: props.label
  });

  function setNomeArquivo(event) {
    if (event.target.files[0]) setArquivo({ nome: event.target.files[0].name });
  }

  return (
    <div className="custom-file">
      <input
        type="file"
        className="custom-file-input"
        id="imagemCapa"
        accept="image/*"
        onChange={setNomeArquivo}
      />
      <label className="custom-file-label" htmlFor="customFile">
        {arquivo.nome}
      </label>
    </div>
  );
};

export default FileField;
