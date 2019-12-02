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
const gameRest = rest("games");

const GameForm = () => {
  const developers = useSelector(state => state.developers);
  const [game, setGame] = useState({
    name: "",
    platform: "",
    price: 0,
    ESRB: "",
    developer: { id: "" },
    releaseDate: "",
    description: "",
    coverImagePath: "",
    screenshots: "",
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
  }, [dispatch]);

  function toggleModal(event) {
    event.preventDefault();
    setModal({ openedModal: !modal.openedModal });
  }

  function handleChangeImage(file, clearFunc) {
    const reader = new FileReader();
    reader.onload = () =>
      setImage({
        filename: file.name,
        data: reader.result,
        clearField: clearFunc
      });
    reader.readAsDataURL(file);
  }

  async function onSubmit(event) {
    event.preventDefault();
    const response = await uploadRest.post(image);
    const formatedGame = Object.assign({}, game, {
      releaseDate: dataConverter.toJson(game.releaseDate),
      coverImagePath: response.headers.get("location")
    });
    delete formatedGame.screenshots;
    gameRest.post(formatedGame);
    clearFields();
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
      screenshots: "",
      linkVideo: ""
    });
    image.clearField();
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
            handleChangeImage={handleChangeImage}
            toggleModal={toggleModal}
          />
        </div>
      </div>
    </div>
  );
};

export default GameForm;
