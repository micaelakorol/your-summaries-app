import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { theme } from './Theme';

const Button = styled(Link)`
    background: ${(props) => props.primario ? '#5B69E2' : '#000'};
    max-width: ${(props) => props.conIcono ? '11rem' : '100%'};
    margin: .6rem;
    border: none;
    border-radius: 0.625rem;
    color: ${theme.white};
    font-family: 'Karla', sans-serif;
    text-transform: uppercase;
    height: 2.5rem;
    padding: 1rem; 
    font-size: .888rem;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    outline: none;
    overflow: hidden;
    &:hover{
    transition: all 2s;
    background: ${(props) => (props.primario ? "pink" : "#646161")}
    }
    svg {
        height: ${(props) => props.iconoGrande ? '100%' : '.8rem;'};
        fill: white;
    }
`;

export default Button;