import React from "react";
import { Headers } from "../../styled-components/Header";
import "../../styles/index.css";
import BtnReturn from "../../styled-components/BtnReturn";
import { Link } from "react-router-dom";
import {
  TitleSummary,
  DescriptionSummary,
  Theme, Title
} from "../../styled-components/SummaryDescription";
import { List } from "../../styled-components/SummaryList";
import { useState } from "react";
import light from "../../assets/light.svg";
import dark from "../../assets/dark.svg";

const ShowSummarySelected = ({ title, description }) => {
  const [changeTheme, setChangeTheme] = useState(false);

  const changeValue = () => {
    setChangeTheme(!changeTheme)
  }

  return (
    <div className={changeTheme ? "dark" : "light"}>
      <Headers>
        <BtnReturn as={Link} to={"/summary-list"} />
        <Title>Hora de Lectura</Title>
        <Theme onClick={() => changeValue()}>
          <img src={changeTheme ? dark : light} alt="theme dark or light" />
        </Theme>
      </Headers>
      <List>
        <TitleSummary theme={changeTheme} changeTheme={changeTheme}>{title}</TitleSummary>
        <DescriptionSummary changeTheme={changeTheme}>{description}</DescriptionSummary>
      </List>
    </div>
  );
};

export default ShowSummarySelected;
