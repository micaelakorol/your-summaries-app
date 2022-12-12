import React from 'react';
import styled from 'styled-components';
import {ReactComponent as IconArrow} from './../assets/flecha.svg';
import {useNavigate} from 'react-router-dom';

const Btn = styled.button`
    display: block;
    width: 2.12rem;
    height: 2.12rem;
    line-height: 2.12rem;
    text-align: center;
    margin: 1rem 1.25rem 0 0;
    border: none;
    background: #0D1A1D;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.31rem; /* 5px */
    cursor: pointer;
 
    @media(max-width: 60rem){ 
        width: 2.5rem; /* 40px */
        height: 2.5rem; /* 40px */
        line-height: 2.5rem; /* 40px */
    }
`;
 
const Icon = styled(IconArrow)`
    width: 50%;
    height: auto;
    fill: #fff;
`;

const BtnReturn = () => {
	const navigate = useNavigate();

	return (
		<Btn onClick={() => navigate('/dashboard')}><Icon /></Btn>
	);
}
 
export default BtnReturn;