import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default props => (
  <Modal isOpen={props.isOpen}>
    <ModalHeader toggle={props.toggle}>{props.title}</ModalHeader>
    <ModalBody>
      {props.body}
      {/* {screenshots.map(screenShot => screenShot)}
      <div className="form-group col-md-6" onClick={adicionarNovoComponente}>
        <a href="/#">incluir outra imagem</a>
      </div> */}
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={toggleModal}>
        {props.labelSalvar}
      </Button>{" "}
      <Button color="secondary" onClick={props.toggle}>
        Cancelar
      </Button>
    </ModalFooter>
  </Modal>
);
