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
            props.developers.map((developer, index) => (
              <tr key={developer.id}>
                <th scope="row">{index + 1}</th>
                <td>{developer.name}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm delete-button"
                    onClick={() => props.handleRemove(developer.id)}
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
