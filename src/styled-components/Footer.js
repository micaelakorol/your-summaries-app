import styled from 'styled-components'
import {theme} from './Theme'

const Footer = styled.footer`
    background: ${theme.footer};
    font-size: 1rem; 
    letter-spacing: 1px;
    font-weight: 500;
    text-transform: uppercase;
    padding: 0.62rem 2.25rem;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 0;
    width: 100%;
 
    @media(max-width: 500px) { 
        flex-direction: column;
        font-size: 14px;
    }
`;
export default Footer