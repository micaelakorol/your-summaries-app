import { useContext } from "react";
import { UserContext } from "../contexts/useContext";
//Funcion que limpia los campos de los input:
const cleanField = () => {
  const { setResumeDescription, setTitleSummary } = useContext(UserContext);

  const cleanFields = () => {
    return setResumeDescription("") + setTitleSummary("");
  };

  return { cleanFields };
};

export default cleanField;
