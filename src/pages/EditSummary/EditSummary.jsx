import React from "react";
import { Headers, Title } from "../../styled-components/Header";
import BtnReturn from "../../styled-components/BtnReturn";
import FooterColor from "../../components/Footer/FooterColor";
import { useParams } from "react-router";
import { List } from "../../styled-components/SummaryList";
import obtainSummaryForId from "../../components/Form/Services/ObtainSummaryForID"
import FormSummaries from "../../components/Form/Components/FormSummaries";

const EditSummary = () => {
  const { id } = useParams();
  obtainSummaryForId(id);
  return (
    <>
      <Headers>
        <BtnReturn />
        <Title>Editar Resumen</Title>
      </Headers>
      <List>
        {/* Formulario para editar resumen */}
        <FormSummaries />
      </List>
      <FooterColor />
    </>
  );
};

export default EditSummary;
