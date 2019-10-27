import React, { useEffect } from "react";
import Title from "../../../commons/components/title/Title";
import { useSelector, useDispatch } from "react-redux";
import TabelaProdutoras from "../components/TabelaProdutoras";

const ProdutoraLista = () => {
  const produtoras = useSelector(state => state.produtoras);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "GET_PRODUTORA_REQUEST" });
  }, [dispatch]);

  return (
    <div>
      <Title label="Lista de Produtoras Cadastradas" />
      <TabelaProdutoras produtoras={produtoras} />
    </div>
  );
};

export default ProdutoraLista;
