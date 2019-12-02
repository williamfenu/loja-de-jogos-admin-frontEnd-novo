import React, { useState, useEffect } from "react";
import Title from "../../../commons/components/title/Title";
import { useSelector, useDispatch } from "react-redux";
import GamesTable from "../components/GamesTable";
import { types as gameTypes } from "../../../commons/actions/gameActions";
import rest from "../../../commons/service/rest";

const gameRest = rest("games");

const GameList = () => {
  const [loading, setLoading] = useState(true);
  const games = useSelector(state => state.games);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    gameRest
      .get()
      .then(games => {
        dispatch({ type: gameTypes.SAVE_GAMES, games });
        setLoading(false);
      })
      .catch(error => console.log(error));
  }, [dispatch]);

  return (
    <div>
      <Title label="Lista de Jogos Cadastrados" />
      {loading ? <p>Carregando...</p> : <GamesTable games={games} />}
    </div>
  );
};

export default GameList;
