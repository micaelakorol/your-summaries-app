import styled from "styled-components";
import { theme } from "./Theme";

const List = styled.ul`
  list-style: none;
  padding: 0 2.5rem; /* 40px */
  height: 75vh;
  overflow-y: auto;

  @media (max-width: 480px) {
    padding: 0;
    margin: 0.5rem;
  }
  li {
    grid-template-columns: 1fr 1fr 1fr auto;
  }

  @media (max-width: 50rem) {
    /*80px*/
    li {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
    }
  }
`;

const ListElement = styled.li`
  padding: 1.25rem 0; /* 20px */
  border-bottom: 2px solid #f2f2f2;
  display: grid;
  gap: 0.31rem; /* 5px */
  justify-content: space-between;

  & > div {
    width: 100%;
    display: flex;
    align-items: center;
  }

  &:hover button,
  &:hover a {
    opacity: 1;
  }
`;

const ListCategory = styled.ul`
  list-style: none;
  padding: 0 2.5rem; /* 40px */
  height: 100%;
  overflow-y: auto;
`;

const ElementListCategory = styled.li`
  padding: 1.25rem 0; /* 20px */
  border-bottom: 2px solid #f2f2f2;
  display: flex;
  justify-content: space-between;
`;

const Category = styled.section`
  font-weight: 500;
  font-size: 0.9rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;

  svg {
    width: 2.12rem;
    height: auto;
    margin-right: 1.25rem; /* 20px */
    border-radius: 0.62rem; /* 10px */
  }

  @media (max-width: 790px) {
    /* 80px */
    font-size: 0.9rem;
  }
`;

const Description = styled.section`
  justify-content: center;
  font-size: 0.9rem;
  text-transform: capitalize;
  @media (max-width: 50rem) {
    /* 50px */
    justify-content: center;
    font-size: 1.2rem;
    margin: 0.5rem;
  }
`;

const Value = styled.section`
  font-size: 0.9rem;
  font-weight: 700;
  justify-content: start;
  max-width: 250px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-top: 0.5rem;
  @media (max-width: 780px) {
    /* 80px */
    justify-content: center;
    font-size: 1rem;
    margin: auto;
  }
`;

const Date = styled.section`
  border-radius: 0.31rem; /* 5px */
  background: ${theme.azulClaro};
  text-align: center;
  color: #fff;
  padding: 0.62rem 3.12rem; /* 10px 50px */
  display: inline-block;
  margin: 1.25rem 0; /* 20px */

  @media (max-width: 50rem) {
    /* 80px */
    padding: 0.4rem;
  }
`;

const ContainerButtons = styled.div`
  @media (max-width: 780px) {
    /* 80px */
    margin-top: 0.5rem;
    justify-content: center;
  }
`;

const ActionButton = styled.button`
  outline: none;
  background: ${theme.grisClaro};
  border: none;
  width: 2rem;
  max-width: 100%;
  display: inline-block;
  height: 2rem;
  line-height: 2rem;
  cursor: pointer;
  border-radius: 0.31rem; /* 5px */
  margin-left: 0.625rem; /* 10px */
  transition: 0.3s ease all;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;

  &:hover {
    background: ${theme.grisClaro2};
  }

  svg {
    width: 1.125rem; /* 18px */
  }

  @media (max-width: 50rem) {
    /* 80px */
    opacity: 1;
  }
`;

const ContainerSubtitle = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Subtitle = styled.h3`
  color: ${theme.grisClaro2};
  font-weight: 400;
  font-size: 2.4rem;
  padding: 2.5rem 0; /* 40px */
`;

const ContainerBtnCentral = styled.span`
  display: flex;
  justify-content: center;
  margin: 2.5rem; /* 40px */
`;

const BtnLoadingMore = styled.button`
  background: ${theme.grisClaro};
  border: none;
  border-radius: 7px;
  color: #000;
  font-family: "Work Sans", sans-serif;
  padding: 0.7rem; /* 20px 30px */

  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  outline: none;
  transition: 0.3s ease all;

  &:hover {
    background: ${theme.grisClaro2};
  }
`;

export {
  List,
  ListElement,
  ListCategory,
  ElementListCategory,
  Description,
  Value,
  Date,
  ContainerButtons,
  ActionButton,
  BtnLoadingMore,
  Category,
  ContainerBtnCentral,
  ContainerSubtitle,
  Subtitle,
};
