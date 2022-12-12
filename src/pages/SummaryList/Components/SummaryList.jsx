import React from "react";
//import { UserContext } from '../context/useContext'
import BtnReturn from "../../../styled-components/BtnReturn";
import { ContainerHeader, Headers, Title } from '../../../styled-components/Header';
import RenderSummaryList from './RenderSummaryList'
import FooterColor from "../../../components/Footer/FooterColor";
const SummaryList = () => {

  return (
    <>
      <Headers>
        <ContainerHeader>
          <BtnReturn/>
          <Title>Lista de Resumenes</Title>
        </ContainerHeader>
      </Headers>
      <RenderSummaryList />
      <FooterColor />
    </>
  );
};

export default SummaryList;
