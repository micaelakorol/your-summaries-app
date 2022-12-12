import React from "react";
import Button from "../../../styled-components/Button";
import {
  ContainerBtn,
  ContainerHeader,
  Headers,
  Title,
} from "../../../styled-components/Header";
import CloseSession from "./CloseSession"
import FooterColor from "../../../components/Footer/FooterColor";
import FormSummaries from "../../../components/Form/Components/FormSummaries";

const Header = () => {

  return (
    <>
    <Headers>
      <ContainerHeader>
        <Title>Añadir Resumen </Title>
        <ContainerBtn>
          <Button to="/summary-list">Lista de Resumenes</Button>
          <CloseSession />
        </ContainerBtn>
      </ContainerHeader>
    </Headers>
  {/*--------Formulario para agregar o editar resumenes---------- */}
    <FormSummaries />
    {/* Footer */}
    <FooterColor />
    </>
  );
};

export default Header;