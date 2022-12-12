import React from "react";
import {
  ActionButton,
  ContainerButtons,
} from "../../../styled-components/SummaryList";
import { Link } from "react-router-dom";
import { ReactComponent as EditIcon } from "../../../assets/editar.svg";
import { ReactComponent as DeleteIcon } from "../../../assets/borrar.svg";
import { ReactComponent as Eye } from "../../../assets/eye-fill.svg";
import btnDelete from "../Services/DeleteSummary";

const ButtonExpenseList = ({ item }) => {
  const { deleteSummary } = btnDelete();

  return (
    <>
      <ContainerButtons>
        <ActionButton as={Link} to={`/edit/${item}`}>
          {" "}
          <EditIcon />{" "}
        </ActionButton>{" "}
        {/* Eliminar un resumen */}
        <ActionButton onClick={() => deleteSummary(item)}>
          {" "}
          <DeleteIcon />{" "}
        </ActionButton>
        <ActionButton as={Link} to={`/read-summary/${item}`}>
          <Eye />
        </ActionButton>
      </ContainerButtons>
    </>
  );
};

export default ButtonExpenseList;
