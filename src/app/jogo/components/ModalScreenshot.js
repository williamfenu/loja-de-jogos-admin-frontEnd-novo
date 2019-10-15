import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import FileField from "../../../commons/components/fields/FileField";

const ScreenShotField = () => (
  <div className="form-group col-md-12">
    <FileField label="Screenshot" />
  </div>
);

const ModalScreenshoot = props => {
  const [componenteScreenshot, setComponentScreenshot] = useState([
    <ScreenShotField />
  ]);

  function adicionarNovoComponente(event) {
    event.preventDefault();
    setComponentScreenshot([...componenteScreenshot, <ScreenShotField />]);
  }

  return (
    <div>
      <Modal isOpen={props.isOpen}>
        <ModalHeader toggle={props.toggle}>Screenshots</ModalHeader>
        <ModalBody>
          {componenteScreenshot.map(
            componenteScreenshot => componenteScreenshot
          )}
          <div
            className="form-group col-md-6"
            onClick={adicionarNovoComponente}
          >
            <a href="/#">incluir outra imagem</a>
          </div>
        </ModalBody>
        <ModalFooter>
          <button color="primary" onClick={props.toggle}>
            Salvar
          </button>{" "}
          <button color="secondary" onClick={props.toggle}>
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalScreenshoot;
