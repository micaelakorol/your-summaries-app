import styled from 'styled-components';
import {theme} from './Theme'

const ContainerSelect = styled.div`
    background: ${theme.azulClaro};
    color: #fff;
    cursor: pointer;
    border-radius: 0.625rem; /* 10px */
    position: relative;
    height: 2.5rem; 
    width: 25%;
    padding: 1rem;
    font-size: .9rem;
    display: flex;
    align-items: center;
    transition: .5s ease all;
    @media(max-width: 1024px){
        width: 40%;
    }
`;
 
const SelectedOption = styled.div`
    width: 100%;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
        width: 1.25rem;
        height: auto;
        margin-left: 1.25rem; /* 20px */
    }
`;
 
const Options = styled.div`
    background: ${theme.select};
    position: absolute;
    top: 3rem; 
    left: 0;
    width: 100%;
    border-radius: 0.625rem; /* 10px */
    max-height: 18.75rem; /* 300px */
    overflow-y: auto;
`;
 
const Option = styled.div`
    padding: 1.25rem; /* 20px */
    display: flex;
    svg {
        width: 28px;
        height: auto;
        margin-right: 1.25rem; /* 20px */
    }
    &:hover {
        background: ${theme.grisClaro2};
    }
`;

 
export {ContainerSelect,SelectedOption, Option, Options };