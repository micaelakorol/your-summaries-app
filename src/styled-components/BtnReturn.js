import React from 'react';
import styled from 'styled-components';
import {ReactComponent as IconArrow} from './../assets/flecha.svg';
import {useNavigate} from 'react-router-dom';
import { theme } from './Theme';

const Btn = styled.button`
    display: block;
    width: 2.12rem;
    height: 2.12rem;
    line-height: 2.12rem;
    text-align: center;
    margin: 1rem 1.25rem 0 0;
    border: none;
    background: ${theme.btnReturn};
    color: ${theme.white};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.31rem;
    cursor: pointer;
 
    @media(max-width: 60rem){ 
        width: 2.5rem; 
        height: 2.5rem; 
        line-height: 2.5rem; 
    }
`;
 
const Icon = styled(IconArrow)`
    width: 50%;
    height: auto;
    fill: ${theme.white};
`;

const BtnReturn = () => {
	const navigate = useNavigate();

	return (
		<Btn onClick={() => navigate('/dashboard')}><Icon /></Btn>
	);
}
 
export default BtnReturn;