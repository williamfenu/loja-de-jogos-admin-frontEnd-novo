import React, { useEffect } from "react";
import Title from "../../commons/components/title/title";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "reactstrap";

const JogoLista = () => {
  let store = useSelector(state => state.jogos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "GET_JOGOS_REQUEST" });
  }, []);

  return (
    <div>
      <Title label="Lista de Jogos Cadastrados" />
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Plataforma</th>
            <th>Preço</th>
            <th>Produtora</th>
          </tr>
        </thead>
        <tbody>
          {store.jogos.length > 0 &&
            store.jogos.map((jogo, index) => (
              <tr key={jogo.id}>
                <th scope="row">{index + 1}</th>
                <td>{jogo.nome}</td>
                <td>{jogo.plataforma}</td>
                <td>{jogo.preco}</td>
                <td>{jogo.produtora}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default JogoLista;
