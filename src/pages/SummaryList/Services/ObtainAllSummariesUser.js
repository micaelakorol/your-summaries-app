import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../contexts/useContext";
import { db } from "../../../firebase/config";

// Trae los resumenes de un usuario:

const ObtainAllSummaries = () => {
  const [summariesUser, setSummariesUser] = useState([]);
  const { userSession } = useContext(UserContext);

  useEffect(() => {
    const queries = query(
      //query: consulta
      collection(db, "expenses"), //accedemos a la ddbb
      where("uidUser", "==", userSession.uid), //buscar registros de gastos por id
      orderBy("date", "desc"), //ordenamos por fecha descendente
    //  limit(10) // limite de tareas a mostrar
    );

    const unsuscribe = onSnapshot(queries, (snapshot) => {
      //traemos los datos de la ddbb de acuerdo con las consultas y condiciones anteriores.
      setSummariesUser(
        snapshot.docs.map((sum) => {
          return { ...sum.data(), id: sum.id };
        })
      );
    });
    return unsuscribe;
  }, [userSession]); //se ejecuta al cargar la pagina o cuando el usuario cambie.

  return [summariesUser];
};

export default ObtainAllSummaries;
