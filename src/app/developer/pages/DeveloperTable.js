import React, { useEffect, useState } from "react";
import Title from "../../../commons/components/title/Title";
import { useSelector, useDispatch } from "react-redux";
import DevelopersTable from "../components/Table";
import rest from "../../../commons/service/rest";

const developerRest = rest("developers");

const DeveloperTable = () => {
  const [loading, setLoading] = useState(true);
  const developers = useSelector(state => state.developers);
  const dispatch = useDispatch();

  useEffect(() => {
    developerRest
      .get()
      .then(resp => {
        dispatch({ type: "SAVE_DEVELOPERS", developers: resp });
        setLoading(false);
      })
      .catch(error => console.log(error));
  }, [dispatch]);

  return (
    <div>
      <Title label="Lista de Produtoras Cadastradas" />
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <DevelopersTable developers={developers} />
      )}
    </div>
  );
};

export default DeveloperTable;
