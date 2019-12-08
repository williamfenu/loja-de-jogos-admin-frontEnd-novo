import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { types as fileInputComponentTypes } from "../../../commons/actions/fileInputComponentActions";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import FileField from "../../../commons/components/fields/FileField";

const ModalScreenshoot = props => {
  const [componentesScreenshot, setComponentScreenshot] = useState([
    <FileField label="screenshot" onChangeImage={props.onChangeImage} />
  ]);
  const dispatch = useDispatch();
  const store = useSelector(state => state);

  function adicionarNovoComponente(event) {
    event.preventDefault();
    setComponentScreenshot([
      ...componentesScreenshot,
      <FileField label="screenshot" onChangeImage={props.onChangeImage} />
    ]);
  }

  function onSave(event) {
    props.toggle(event);
    dispatch({
      type: fileInputComponentTypes.ADD_SCREENSHOTS,
      fileField: componentesScreenshot
    });
  }

  function onCancel(event) {
    props.toggle(event);
    setComponentScreenshot(store.fileInputComponents);
  }

  return (
    <div>
      <Modal isOpen={props.isOpen}>
        <ModalHeader toggle={props.toggle}>Screenshots</ModalHeader>
        <ModalBody>
          {componentesScreenshot.map((componenteScreenshot, index) => (
            <div className="form-group col-md-12" key={index}>
              {componenteScreenshot}
            </div>
          ))}
          <div
            className="form-group col-md-6"
            onClick={adicionarNovoComponente}
          >
            <a href="/#">incluir outra imagem</a>
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={onSave}>
            Salvar
          </button>{" "}
          <button className="btn btn-secondary" onClick={onCancel}>
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalScreenshoot;
