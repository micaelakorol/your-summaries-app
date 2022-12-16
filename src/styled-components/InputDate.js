import styled from "styled-components";
import { theme } from "./Theme";

const InputContainer = styled.section`
  position: relative;

  input {
    font-family: "Work Sans", sans-serif;
    background: ${theme.blueLight};
    color: ${theme.white};
    border: none;
    cursor: pointer;
    border-radius: 0.625rem;
    height: 2.5rem;
    width: 17.5rem;
    max-width: 100%;
    padding: 1rem;
    font-size: 1rem;
    outline: none;
  }

  .rdp {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    max-width: 100vw;
    left: -3.1rem;
    margin: auto;
    @media (max-width: 480px) {
        .rdp{
            margin: auto;
        }
  }
  .rdp-months {
    display: flex;
    justify-content: center;
  }

  .rdp-month {
    background: ${theme.white};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 20px;
    border-radius: 10px;
    @media (max-width: 480px) {
      position: absolute;
      left: 3rem;
      max-width: 250px;
      .rdp-button {
        width: 22px;
      }
    }
  }
`;

export default InputContainer;
