import { useContext } from "react";
import { UserContext } from "../../../contexts/useContext";
import editSummaryObtained from "../Services/EditSummaryObtained";
import { useNavigate } from "react-router";
import cleanField from "../../../utilities-functions/CleanField";
import addDocToFirebase from "../Services/AddDocToFirebase";

//Funcion para editar o añadir resumen (FormSummaries):
const submitAndValidations = () => {
  const {
    titleSummary,
    editSummary,
    setChangeAlert,
    setAlert,
    resumeDescription,
  } = useContext(UserContext);
  const { summaryObtain } = editSummaryObtained();
  const { addSummaryForm } = addDocToFirebase();
  const { cleanFields } = cleanField();
  const navigate = useNavigate();

  const submitSummaryOrEdit = (e) => {
    e.preventDefault();
    if (titleSummary !== "" && resumeDescription !== "") {
      // Si tenemos un gasto, significa que queremos editar...
      if (editSummary) {
        summaryObtain({ id: editSummary.id })
          .then(() => {
            navigate("/summary-list");
          })
          .catch((error) => alert(error));
        cleanFields();
        //!si no tenemos un gasto, significa que queremos agregar uno..
      } else {
        addSummaryForm();
        setChangeAlert(true);
        setAlert({
          tipo: "exito",
          mensaje: "Agregado correctamente!",
        });
        cleanFields();
        return;
      }
    } else {
      setChangeAlert(true);
      setAlert({
        tipo: "error",
        mensaje: "Por favor , rellena todos los campos",
      });
      return;
    }
  };

  return { submitSummaryOrEdit };
};

export default submitAndValidations;
