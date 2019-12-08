import React, { useState } from "react";
import Title from "../../../commons/components/title/Title";
import rest from "../../../commons/service/rest";

const developerRest = rest("developers");

const DeveloperForm = () => {
  const [developer, setDeveloper] = useState({ name: "" });

  const saveDevelopers = event => {
    event.preventDefault();
    developerRest.post(developer);
    setDeveloper({ name: "" });
  };

  return (
    <div className="container">
      <Title label="Cadastrar Produtora" />
      <div className="card">
        <div className="card-body">
          <form onSubmit={saveDevelopers}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputNome">Nome</label>
                <input
                  type="text"
                  value={developer.name}
                  onChange={e => setDeveloper({ name: e.target.value })}
                  className="form-control"
                  id="inputNome"
                  placeholder="ex: Rockstar"
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Salvar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeveloperForm;
