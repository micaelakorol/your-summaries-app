import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase/config";

const BtnDelete = () => {
// elimina un resumen:
  const deleteSummary = async (item) => {
    try {
      await deleteDoc(doc(db, "expenses", item));
    } catch (error) {
      alert(`${error}, could not delete :(`);
    }
  };

  return { deleteSummary };
};

export default BtnDelete;
