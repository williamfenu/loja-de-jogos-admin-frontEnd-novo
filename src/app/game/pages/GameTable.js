import React, { useState, useEffect } from "react";
import Title from "../../../commons/components/title/Title";
import { useSelector, useDispatch } from "react-redux";
import GamesTable from "../components/Table";
import { types as gameTypes } from "../../../commons/actions/gameActions";
import rest from "../../../commons/service/rest";

const gameRest = rest("games");

const GameTable = props => {
  const [loading, setLoading] = useState(true);
  const games = useSelector(state => state.games);
  const dispatch = useDispatch();

  useEffect(() => {
    gameRest
      .get()
      .then(games => {
        dispatch({ type: gameTypes.SAVE_GAMES, games });
        setLoading(false);
      })
      .catch(error => console.log(error));
  }, [dispatch]);

  const handleRemove = async id => {
    await gameRest.delete(id);
    getGames();
  };

  const handleUpdate = async id => {
    props.history.push(`/app/jogo/${id}`);
  };

  const getGames = () => {
    gameRest
      .get()
      .then(games => {
        dispatch({ type: gameTypes.SAVE_GAMES, games });
        setLoading(false);
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <Title label="Lista de Jogos Cadastrados" />
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <GamesTable
          games={games}
          handleRemove={handleRemove}
          handleUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default GameTable;
