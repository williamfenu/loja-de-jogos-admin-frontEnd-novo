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
          {props.developers &&
            props.developers.length > 0 &&
            props.developers.map((developers, index) => (
              <tr key={developers.id}>
                <th scope="row">{index + 1}</th>
                <td>{developers.name}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};
