import React from "react";
import { Table } from "reactstrap";
import "./styles.css";

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
                <td>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                  }).format(game.price)}
                </td>
                <td>{game.developer.name}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm delete-button"
                    onClick={() => props.handleUpdate(game.id)}
                  >
                    ✓
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm delete-button"
                    onClick={() => props.handleRemove(game.id)}
                  >
                    x
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};
