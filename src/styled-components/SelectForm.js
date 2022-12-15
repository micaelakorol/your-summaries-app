import styled from 'styled-components';
import {theme} from './Theme'

const ContainerSelect = styled.div`
    background: ${theme.blueLight};
    color: ${theme.white};
    cursor: pointer;
    border-radius: 0.625rem;
    position: relative;
    height: 2.5rem; 
    width: 27%;
    padding: 1rem;
    font-size: .9rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    @media(max-width: 480px){
        width: 60%;
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
        margin-left: 1.25rem;
    }
`;
 
const Options = styled.div`
    background: ${theme.select};
    position: absolute;
    top: 3rem; 
    left: 0;
    width: 100%;
    border-radius: 0.625rem; 
    max-height: 18.75rem; 
    overflow-y: auto;
`;
 
const Option = styled.div`
    padding: 1.25rem;
    display: flex;
    svg {
        width: 28px;
        height: auto;
        margin-right: 1.25rem;
    }
    &:hover {
        background: ${theme.lightGray2};
    }
`;

 
export {ContainerSelect,SelectedOption, Option, Options };