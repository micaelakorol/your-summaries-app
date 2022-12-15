import styled from 'styled-components';
import { theme } from './Theme';

const Container = styled.main`
background: ${theme.white};
width: 75%;
max-width: 70rem; 
min-height: 75vh;
overflow-y: auto;
box-shadow: 0px 1.25rem 2.5rem rgba(0,0,0,.05);
border-radius: 0.625rem;
margin: auto;
display: flex;
flex-direction: column;
justify-content: space-between;
position: relative;
z-index: 100;

@media(max-width: 950px){
    height: 95vh;
    max-height: none;
}
`;

export default Container;