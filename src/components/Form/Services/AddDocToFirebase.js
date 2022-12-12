
import { useContext } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { UserContext } from "../../../contexts/useContext";
import { getUnixTime } from "date-fns";
import { v4 as uuidv4 } from 'uuid';

//Función que agrega a la base de datos los resumenes del formulario (handleSubmit):
const addDocToFirebase = () => {
  const { titleSummary, resumeDescription, date, changeCategory, userSession } = useContext(
    UserContext
  );
  const addSummaryForm = async () => {
    try {
      await addDoc(collection(db, "expenses"), {
        title: titleSummary,
        resumeDescription: resumeDescription,
        changeCategory: changeCategory,
        date: getUnixTime(date),
        id: uuidv4(),
        uidUser: userSession.uid
      });
    } catch (error) {
      alert(error); 
    }
  };
  return { addSummaryForm };
};

export default addDocToFirebase;