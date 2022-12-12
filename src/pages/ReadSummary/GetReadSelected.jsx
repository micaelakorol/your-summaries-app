import { doc, getDoc } from "firebase/firestore";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { db } from "../../firebase/config";
import SummarySelected from "./ShowSummarySelected";

//Busca en la bbdd en id del resumen seleccionado para que lo podamos visualizar: 
const ReadSelected = () => {
  const { id } = useParams();
  const [summarySelected, setSummarySelected] = useState([]);

  useEffect(() => {
    const obtainDocumentsDB = async () => {
      const docs = await getDoc(doc(db, "expenses", id));
      if (docs.exists) {
        setSummarySelected(docs.data());
      } else {
        alert("error");
      }
    };
    obtainDocumentsDB();
  }, [id]);

  return (
    <>
    {/* Muestra el resumen seleccionado */}
      <SummarySelected
        title={summarySelected.title}
        description={summarySelected.resumeDescription}
      />
    </>
  );
};

export default ReadSelected;
