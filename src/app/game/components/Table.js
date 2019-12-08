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
          {props.games &&
            props.games.map((game, index) => (
              <tr key={game.id}>
                <th scope="row">{index + 1}</th>
                <td>{game.name}</td>
                <td>{game.platform}</td>
                <td>{game.price}</td>
                <td>{game.developer.name}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};
