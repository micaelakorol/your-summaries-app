import { useContext, useEffect } from "react";
import { UserContext } from "../../../contexts/useContext";
import { fromUnixTime } from "date-fns";
import { useNavigate } from "react-router";

// Cargamos el titulo y descripcion del resumen a editar:
const captureValuesInput = () => {
  const {userSession,setChangeCategory,editSummary,setDate,setResumeDescription, setTitleSummary} = useContext(UserContext);
  const navigate = useNavigate();

  //1. comprobamos si hay  algun resumen  al cargar la pagina
  //2. de ser así, establecemos en los inputs los valores del resumen seleccionado p/ editar: 
  useEffect(() => {
    if (editSummary) {
      if (editSummary.data().uidUser === userSession.uid) {
        setChangeCategory(editSummary.data().changeCategory);
        setDate(fromUnixTime(editSummary.data().date));
        setResumeDescription(editSummary.data().resumeDescription);
        setTitleSummary(editSummary.data().title);
      } else {
        navigate("/dashboard");
      }
    }
  }, [editSummary, userSession]);

  //Captura el valor del input del formulario de resumenes:
  const handleChange = (e) => {
    if (e.target.name === "title") {
      setTitleSummary(e.target.value);
    } else if (e.target.name === "resumeDescription") {
      setResumeDescription(e.target.value);
    }
    return;
  };
  return { handleChange };
};
export default captureValuesInput;
