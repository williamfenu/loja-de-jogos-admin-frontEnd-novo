import React, { useState } from "react";
import Title from "../../../commons/components/title/Title";

const ProdutoraForm = () => {
  const [produtora, setProdutora] = useState({ nome: "" });

  return (
    <div className="container">
      <Title label="Cadastrar Produtora" />
      <div className="card">
        <div className="card-body">
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputNome">Nome</label>
                <input
                  type="text"
                  value={produtora.nome}
                  onChange={e => setProdutora({ nome: e.target.value })}
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

export default ProdutoraForm;
