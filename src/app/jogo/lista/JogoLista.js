import React, { useEffect } from "react";
import Title from "../../../commons/components/title/Title";
import { useSelector, useDispatch } from "react-redux";
import TabelaJogos from "../components/TabelaJogos";
import { types as jogoTypes } from "../../../commons/actions/jogoActions";

const JogoLista = () => {
  const jogos = useSelector(state => state.jogos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: jogoTypes.GET_JOGOS_REQUEST });
  }, [dispatch]);

  return (
    <div>
      <Title label="Lista de Jogos Cadastrados" />
      <TabelaJogos jogos={jogos} />
    </div>
  );
};

export default JogoLista;
