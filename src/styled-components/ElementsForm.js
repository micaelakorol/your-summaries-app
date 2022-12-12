import styled from "styled-components";
import { theme } from "./Theme";

const ContainerFilter = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.87rem; /* 30px */
  @media (max-width: 950px) {
    flex-direction: column;
    & > * {
      width: 100%;
      margin-bottom: 0.62rem; /* 10px */
    }
  }
`;

const Form = styled.form`
  padding: 0 2.5rem; /* 40px */
  height: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  input {
    width: 100%;
    text-align: center;
    padding: 1rem;
    &::placeholder {
      color: rgba(0, 0, 0, 0.2);
    }
  }
  @media (max-width: 950px) {
    /* 950px */
    justify-content: start;
  }
  @media (max-width: 480px) {
    padding: 0;
  }
`;

const Input = styled.input`
    font-size: 1rem;
    border: none;
    border-bottom: 2px solid ${theme.grisClaro};
    outline: none;
`;

const TextArea = styled.textarea`
  font-size: 1.2rem !important;
  padding: 0.5rem;
  border: none;
  text-align: center;
  margin-top: 1rem;
  outline: none;
  font-size: 2rem;
`;

const ContainerBtn = styled.section`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

export { ContainerFilter, Form, Input, ContainerBtn, TextArea };
