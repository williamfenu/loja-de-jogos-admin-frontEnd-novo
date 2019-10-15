import React, { useEffect } from "react";
import Title from "../../commons/components/title/title";
import { useSelector, useDispatch } from "react-redux";
import TabelaJogos from "./components/TabelaJogos";

const JogoLista = () => {
  const store = useSelector(state => state.jogos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "GET_JOGOS_REQUEST" });
  }, []);

  return (
    <div>
      <Title label="Lista de Jogos Cadastrados" />
      <TabelaJogos jogos={store.jogos} />
    </div>
  );
};

export default JogoLista;
