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
          </tr>
        </thead>
        <tbody>
          {props.produtoras &&
            props.produtoras.length > 0 &&
            props.produtoras.map((produtoras, index) => (
              <tr key={produtoras.id}>
                <th scope="row">{index + 1}</th>
                <td>{produtoras.nome}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};
