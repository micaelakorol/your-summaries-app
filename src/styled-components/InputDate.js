import styled from 'styled-components';
import {theme} from './Theme'

const InputContainer = styled.section`
    position: relative;
 
    input {
        font-family: 'Work Sans', sans-serif;
        background: ${theme.azulClaro};
        color: #fff;
        border: none;
        cursor: pointer;
        border-radius: 0.625rem; /* 10px */
        height: 2.5rem; 
        width: 300px;
        max-width: 100%;
        padding: 1rem;
        font-size: 1rem; /* 24px */
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        outline: none;
    }
 
    .rdp {
        position: absolute;
    }
 
    .rdp-months {
        display: flex;
        justify-content: center;
    }
 
    .rdp-month {
        background: #fff;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        padding: 20px;
        border-radius: 10px;
    }
 
    @media (max-width: 950px) {
        /* 950px */
        & > * {
            max-width: 60%;
        }
    }
`;

export default InputContainer