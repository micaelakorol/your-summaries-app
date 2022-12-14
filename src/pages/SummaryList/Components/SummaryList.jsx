import React from "react";
//import { UserContext } from '../context/useContext'
import BtnReturn from "../../../styled-components/BtnReturn";
import { ContainerHeader, Headers, Title } from '../../../styled-components/Header';
import RenderSummaryList from './RenderSummaryList'
import FooterColor from "../../../components/Footer/FooterColor";
import { useNavigate } from "react-router";
const SummaryList = () => {

  const navigate = useNavigate()

  return (
    <>
      <Headers>
        <ContainerHeader>
          <BtnReturn onClick={navigate('/dashboard')}/>
          <Title>Lista de Resumenes</Title>
        </ContainerHeader>
      </Headers>
      <RenderSummaryList />
      <FooterColor />
    </>
  );
};

export default SummaryList;
