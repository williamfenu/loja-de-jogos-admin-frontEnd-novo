import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import { types as developerTypes } from "../../../commons/actions/developerActions";
import Title from "../../../commons/components/title/Title";
import { dataConverter } from "../../../utils/dataConverter";
import rest from "../../../commons/service/rest";
import Form from "../components/Form";
import ModalScreenShot from "../components/ModalScreenshot";
import update from "immutability-helper";

const developersRest = rest("developers");
const uploadRest = rest("upload/cover");
const screenShotsRest = rest("upload/screenshots");
const gameRest = rest("games");

const GameForm = props => {
  const developers = useSelector(state => state.developers);
  const [screenshotsImages, setScreenshots] = useState([]);
  const [game, setGame] = useState({
    name: "",
    platform: "",
    price: "",
    ESRB: "",
    developer: { id: "" },
    releaseDate: "",
    description: "",
    linkVideo: ""
  });
  const dispatch = useDispatch();
  const [image, setImage] = useState({
    filename: "",
    data: ""
  });
  const [modal, setModal] = useState({
    openedModal: false
  });
  const [clearModalFunction, setClearModalFunction] = useState("");

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
    if (props.match.params.id) {
      gameRest.get(props.match.params.id).then(resp => {
        setGame({ ...resp });
      });
    }
  }, [dispatch, props.match.params.id]);

  function toggleModal(event) {
    event.preventDefault();
    setModal({ openedModal: !modal.openedModal });
  }

  function handleUploadCover(event) {
    if (event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setImage({
          filename: file.name,
          data: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  }

  const handleUploadScreenshots = (file, id) => {
    let imageIndex = "";
    if (screenshotsImages.length) {
      imageIndex = screenshotsImages.findIndex(image => image.id === id);
    }
    const reader = new FileReader();

    reader.onload = () => {
      if (imageIndex !== "" && imageIndex >= 0) {
        const newData = update(screenshotsImages[imageIndex], {
          file: { filename: { $set: file.name }, data: { $set: reader.result } }
        });
        const newArray = update(screenshotsImages, {
          $splice: [[imageIndex, 1, newData]]
        });
        setScreenshots(newArray);
      } else {
        setScreenshots(screenshotsOldState => [
          ...screenshotsOldState,
          {
            file: {
              filename: file.name,
              data: reader.result
            },
            id
          }
        ]);
      }
    };
    reader.readAsDataURL(file);
  };

  async function onSubmit(data) {
    const formatedGame = Object.assign({}, game, {
      releaseDate: dataConverter.toJson(game.releaseDate)
    });
    if (image.filename) {
      const response = await uploadRest.post(image);
      formatedGame.coverImagePath = response.headers.get("location");
    }
    if (screenshotsImages.length) {
      let arrayOfScreenshots = [];
      screenshotsImages.map(screenshot =>
        arrayOfScreenshots.push(screenshot.file)
      );
      const response = await screenShotsRest
        .post(arrayOfScreenshots)
        .then(resp => resp.json())
        .then(json => json);
      const screenshotsLinks = [];
      response.map(response => screenshotsLinks.push(response.link));
      formatedGame.screenshots = screenshotsLinks;
    }
    gameRest.post(formatedGame);
    clearFields();
  }

  const clearFields = () => {
    setGame({
      ...game,
      name: "",
      platform: "",
      price: "",
      ESRB: "",
      developer: { id: "" },
      releaseDate: "",
      description: "",
      linkVideo: ""
    });
    setImage({
      filename: "",
      data: ""
    });
    clearModalFunction();
  };

  const clearModal = clearModalFunction => {
    setClearModalFunction(clearModalFunction);
  };

  return (
    <div className="container">
      <Title label="Cadastrar Jogo" />
      <div className="card">
        <div className="card-body">
          <Form
            developers={developers}
            game={game}
            coverInputLabel={image.filename}
            setGame={setGame}
            onSubmit={onSubmit}
            handleUploadCover={handleUploadCover}
            toggleModal={toggleModal}
          />
          <ModalScreenShot
            isOpen={modal.openedModal}
            clearModal={clearModal}
            toggle={toggleModal}
            onChangeImage={handleUploadScreenshots}
          />
        </div>
      </div>
    </div>
  );
};

export default GameForm;
