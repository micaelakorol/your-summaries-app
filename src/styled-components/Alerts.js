import styled, {keyframes} from 'styled-components';
import {theme} from './Theme';

const slideDown = keyframes`
    0% {
        transform: translateY(-1.25rem); 
        opacity: 0;
    }
 
    10% {
        transform: translateY(1.25rem);
        opacity: 1;
    }
    
    90% {
        transform: translateY(1.25rem);
        opacity: 1;
    }
 
    100% {
        transform: translateY(1.25rem);
        opacity: 0;
    }
`;
 
const AlertContainer = styled.section`
    z-index: 1000;
    width: 100%;
    left: 0;
    top: 1.25rem; 
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${slideDown} 4s ease forwards;
 
    p {
        background: ${(props) => {
            if(props.tipo === 'error'){
                return theme.red;
            } else if (props.tipo === 'exito') {
                return theme.green;
            } else {
                return theme.dark;
            }
        }};
        color: ${theme.white};
        padding: 1.25rem 2.5rem; 
        border-radius: 0.31rem; 
        box-shadow: 0px 0px 15px rgba(0,0,0,.1);
        text-align: center;
    }
`;
export default AlertContainer