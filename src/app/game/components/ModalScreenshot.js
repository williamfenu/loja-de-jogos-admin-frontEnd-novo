import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { types as fileFieldTypes } from "../../../commons/actions/fileFieldActions";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import FileField from "../../../commons/components/fields/FileField";
import update from "immutability-helper";

let localId = 1;

const ModalScreenshoot = props => {
  const { clearModal } = props;
  const [fileFieldComponents, setFileFieldComponents] = useState([
    { id: "", label: "", filename: "" }
  ]);
  const dispatch = useDispatch();
  const store = useSelector(state => state);

  const clearFields = useCallback(() => {
    dispatch({ type: "CLEAN_FIELDS" });
  }, [dispatch]);

  useEffect(() => {
    setFileFieldComponents(store.fileFields);
  }, [store.fileFields]);

  useEffect(
    useCallback(() => {
      clearModal(() => clearFields);
    }, [clearModal, clearFields])
  );

  function setFileName(event, id) {
    if (event.target.files[0]) {
      const indexComponent = fileFieldComponents.findIndex(
        component => component.id === id
      );
      const newData = update(fileFieldComponents[indexComponent], {
        filename: { $set: event.target.files[0].name }
      });
      const updatedArray = update(fileFieldComponents, {
        $splice: [[indexComponent, 1, newData]]
      });
      setFileFieldComponents(updatedArray);
      props.onChangeImage(event.target.files[0], id);
    }
  }

  function addNewComponent(event) {
    event.preventDefault();
    setFileFieldComponents([
      ...fileFieldComponents,
      { id: localId, label: "screenshot" }
    ]);
    localId++;
  }

  function onSave(event) {
    props.toggle(event);
    const filteredFileFieldComponents = fileFieldComponents.filter(
      fileFieldComponents => !!fileFieldComponents.filename
    );

    if (filteredFileFieldComponents.length) {
      dispatch({
        type: fileFieldTypes.ADD_SCREENSHOTS,
        fileFields: filteredFileFieldComponents
      });
    } else {
      clearFields();
    }
  }

  function onCancel(event) {
    props.toggle(event);
    setFileFieldComponents(store.fileFields);
  }

  return (
    <div>
      <Modal isOpen={props.isOpen}>
        <ModalHeader toggle={props.toggle}>Screenshots</ModalHeader>
        <ModalBody>
          {fileFieldComponents.map(componenteScreenshot => (
            <div className="form-group col-md-12" key={componenteScreenshot.id}>
              <FileField
                label={
                  componenteScreenshot.filename
                    ? componenteScreenshot.filename
                    : componenteScreenshot.label
                }
                fieldId={componenteScreenshot.id}
                onChangeImage={setFileName}
              />
            </div>
          ))}
          <div className="form-group col-md-6" onClick={addNewComponent}>
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
