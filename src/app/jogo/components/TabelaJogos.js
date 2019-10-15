import React from "react";
import { Table } from "reactstrap";

export default props => {
  return (
    <div>
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
          {props.jogos.length > 0 &&
            props.jogos.map((jogo, index) => (
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
