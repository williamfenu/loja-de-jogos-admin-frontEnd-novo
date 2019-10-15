import React, { useState } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import Title from "../../../commons/components/title/title";
import ModalScreenShot from "../components/ModalScreenshot";
import FileField from "../../../commons/components/fields/FileField";

const JogoForm = () => {
  const [jogo, setJogo] = useState({
    nome: "",
    plataforma: "",
    preco: "",
    classificacaoEtaria: "",
    produtora: "",
    data: "",
    descricao: "",
    imagemCapa: "",
    screenshots: "",
    linkVideo: ""
  });

  const dispatch = useDispatch();

  const [modal, setModal] = useState({
    openedModal: false
  });

  function toggleModal(event) {
    event.preventDefault();
    setModal({ openedModal: !modal.openedModal });
  }

  function onSubmit(event) {
    event.preventDefault();
    dispatch({ type: "SAVE_JOGO_REQUEST", jogo });
    limparCampos();
  }

  function limparCampos() {
    setJogo({
      ...jogo,
      nome: "",
      plataforma: "",
      preco: "",
      classificacaoEtaria: "",
      produtora: "",
      data: "",
      descricao: "",
      imagemCapa: "",
      screenshots: "",
      linkVideo: ""
    });
  }

  return (
    <div className="container">
      <Title label="Cadastrar Jogo" />
      <div className="card">
        <div className="card-body">
          <form onSubmit={onSubmit} encType="multipart/form-data">
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputNome">Nome</label>
                <input
                  type="text"
                  value={jogo.nome}
                  onChange={e => setJogo({ ...jogo, nome: e.target.value })}
                  className="form-control"
                  id="inputNome"
                  placeholder="ex: Batman Arkhan Asylumn"
                />
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="inputPlataforma">Plataforma</label>
                <select
                  id="inputPlataforma"
                  className="form-control"
                  value={jogo.plataforma}
                  onChange={e =>
                    setJogo({ ...jogo, plataforma: e.target.value })
                  }
                >
                  <option defaultValue>selecione...</option>
                  <option value="PLAYSTATION4">Playstation 4</option>
                  <option value="XBOXONE">Xbox One</option>
                  <option value="NINTENDOSWITCH">Nintendo Switch</option>
                </select>
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="inputPreco">Preço</label>
                <input
                  type="number"
                  value={jogo.preco}
                  onChange={e => setJogo({ ...jogo, preco: e.target.value })}
                  id="inputPreco"
                  step="0.01"
                  min="0"
                  className="form-control"
                  placeholder="199.99"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor="inputProdutora">Produtora</label>
                <input
                  type="text"
                  value={jogo.produtora}
                  onChange={e =>
                    setJogo({ ...jogo, produtora: e.target.value })
                  }
                  className="form-control"
                  id="inputProdutora"
                  placeholder="ex: Rockstar"
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputData">Data de Lançamento</label>
                <input
                  type="date"
                  className="form-control"
                  id="inputData"
                  value={jogo.data}
                  onChange={e => setJogo({ ...jogo, data: e.target.value })}
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputPlataforma">Classificação Etária</label>
                <select
                  id="inputPlataforma"
                  className="form-control"
                  value={jogo.classificacaoEtaria}
                  onChange={e =>
                    setJogo({ ...jogo, classificacaoEtaria: e.target.value })
                  }
                >
                  <option defaultValue>selecione...</option>
                  <option value="EC">Early Childhood (EC)</option>
                  <option value="E">Everyone (E)</option>
                  <option value="E10+">Everyone 10+ (E10+)</option>
                  <option value="T">Teen (T)</option>
                  <option value="M">Mature (M)</option>
                  <option value="AO">Adults Only (AO)</option>
                  <option value="RP">Rating Pending (RP)</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="descricaoTextArea">Descrição</label>
              <textarea
                className="form-control"
                value={jogo.descricao}
                onChange={e => setJogo({ ...jogo, descricao: e.target.value })}
                id="descricaoTextArea"
                rows="3"
              ></textarea>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <FileField label="Capa do Jogo" />
              </div>
              <div className="form-group col-md-4 openModal">
                <a href="/#" onClick={toggleModal}>
                  Adicionar screenshots...
                </a>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
            <ModalScreenShot isOpen={modal.openedModal} toggle={toggleModal} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default JogoForm;
