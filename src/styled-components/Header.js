import styled from "styled-components";

const Headers = styled.nav`
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 950px) {
    flex-wrap: wrap;
  }
`;

const Title = styled.h1`
  font-weight: normal;
  font-family: "La Belle Aurore";
  font-size: 1.4rem;
  margin-top: 0.8rem;
`;

const TitlePrincipal = styled(Title)`
 font-family: Kumbh Sans;
`

const ContainerHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 950px) {
    /* 950px */
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    & > div {
      display: flex;
      margin-bottom: 1.25rem; /* 20px */
    }
  }
`;

const ContainerBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export { Headers, Title, ContainerHeader, ContainerBtn, TitlePrincipal };
