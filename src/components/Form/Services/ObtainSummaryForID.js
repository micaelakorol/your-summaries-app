import { doc, getDoc } from "firebase/firestore";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../../../contexts/useContext";
import { db } from "../../../firebase/config";

//1. Recibe el id del resumen seleccionado para editar y lo trae de la bbdd.  
const obtainSummaryForId = (id) => {
  const { editSummary, setEditSummary } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const obtainDocumentsDB = async () => {
      const docs = await getDoc(doc(db, "expenses", id));
      if (docs.exists) {
        setEditSummary(docs);
      } else {
        navigate("/dashboard");
      }
    };
    obtainDocumentsDB();
  }, [id, navigate]);

  return [editSummary];
};

export default obtainSummaryForId;
