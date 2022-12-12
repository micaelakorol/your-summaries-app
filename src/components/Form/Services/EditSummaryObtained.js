import { useContext } from "react";
import { UserContext } from "../../../contexts/useContext";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { getUnixTime } from "date-fns";

//2. Actualizamos/editamos segun id, el resumen en la ui y bbdd enviandole los nuevos valores: 

const editSummaryObtained = () => {
  const { titleSummary, resumeDescription, date, changeCategory } = useContext(UserContext);
  
  const summaryObtain = async ({ id }) => {
    try {
      await updateDoc(doc(db, "expenses", id), {
        title: titleSummary,
        resumeDescription: resumeDescription,
        changeCategory: changeCategory,
        date: getUnixTime(date),
      });
    } catch (error) {
      alert(error);
    }
  };
  return { summaryObtain };
};

export default editSummaryObtained;
