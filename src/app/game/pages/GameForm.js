import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import { types as developerTypes } from "../../../commons/actions/developerActions";
import Title from "../../../commons/components/title/Title";
import { dataConverter } from "../../../utils/dataConverter";
import rest from "../../../commons/service/rest";
import Form from "../components/Form";

const developersRest = rest("developers");
const uploadRest = rest("upload/cover");
const screenShotsRest = rest("upload/screenshots");
const gameRest = rest("games");

const GameForm = () => {
  const developers = useSelector(state => state.developers);
  const [screenshots, setScreenshots] = useState([]);
  const [game, setGame] = useState({
    name: "",
    platform: "",
    price: 0,
    ESRB: "",
    developer: { id: "" },
    releaseDate: "",
    description: "",
    linkVideo: ""
  });
  const dispatch = useDispatch();
  const [image, setImage] = useState({
    filename: "",
    data: "",
    clearField: ""
  });
  const [modal, setModal] = useState({
    openedModal: false
  });

  useEffect(() => {
    developersRest
      .get()
      .then(resp =>
        dispatch({
          type: developerTypes.SAVE_DEVELOPERS,
          developers: resp
        })
      )
      .catch(error => console.log(error));
  }, []);

  function toggleModal(event) {
    event.preventDefault();
    setModal({ openedModal: !modal.openedModal });
  }

  function handleUploadCover(file, clearFunc) {
    const reader = new FileReader();
    reader.onload = () =>
      setImage({
        filename: file.name,
        data: reader.result,
        clearField: clearFunc
      });
    reader.readAsDataURL(file);
  }

  function handleUploadScreenshots(file, clearFunc) {
    const reader = new FileReader();
    reader.onload = () =>
      setScreenshots(screenshots => [
        ...screenshots,
        {
          filename: file.name,
          data: reader.result,
          clearField: clearFunc
        }
      ]);
    reader.readAsDataURL(file);
  }

  async function onSubmit(event) {
    event.preventDefault();
    const formatedGame = Object.assign({}, game, {
      releaseDate: dataConverter.toJson(game.releaseDate)
    });
    // if (image.filename) {
    //   const response = await uploadRest.post(image);
    //   formatedGame.coverImagePath = response.headers.get("location");
    // }
    if (screenshots) {
      const response = await screenShotsRest
        .post(screenshots)
        .then(resp => resp.json())
        .then(json => json);

      console.log(response);
    }
    // gameRest.post(formatedGame);
    // clearFields();
    // if (image.clearField) {
    //   image.clearField();
    // }
  }

  function clearFields() {
    setGame({
      ...game,
      name: "",
      platform: "",
      price: 0,
      ESRB: "",
      developer: { id: "" },
      releaseDate: "",
      description: "",
      linkVideo: ""
    });
    setImage({
      filename: "",
      data: "",
      clearField: ""
    });
  }

  return (
    <div className="container">
      <Title label="Cadastrar Jogo" />
      <div className="card">
        <div className="card-body">
          <Form
            developers={developers}
            modal={modal}
            game={game}
            setGame={setGame}
            onSubmit={onSubmit}
            handleUploadCover={handleUploadCover}
            handleUploadScreenshots={handleUploadScreenshots}
            toggleModal={toggleModal}
          />
        </div>
      </div>
    </div>
  );
};

export default GameForm;
