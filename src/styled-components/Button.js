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
    font-family: 'Work Sans', sans-serif;
    height: 2.5rem;
    padding: 1rem 1.3rem; 
    font-size: .9rem;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    outline: none;
    overflow: hidden;
    svg {
        height: ${(props) => props.iconoGrande ? '100%' : '0.75rem;'};
        fill: white;
    }
`;

export default Button;