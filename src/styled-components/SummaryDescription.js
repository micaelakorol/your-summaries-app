import styled from "styled-components";
import { theme } from "./Theme";

const TitleSummary = styled.h2`
text-align: center;
margin-bottom: 1rem;
text-decoration: underline;
color: ${(props) => (props.changeTheme ? "#fff" : "#8792F1")}
`
const DescriptionSummary = styled.section`
text-align: justify;
font-weight: 700;
color: ${(props) => (props.changeTheme ? "#fff" : "#646161")}
`

const Theme = styled.button`
border: none;
background: ${theme.theme};
padding: .9rem .4rem;
clip-path: circle(36%);
cursor: pointer;
`
const Title = styled.p`
font-family: 'La Belle Aurore';
font-size: 1.4rem;
`

export {TitleSummary, DescriptionSummary, Theme, Title}