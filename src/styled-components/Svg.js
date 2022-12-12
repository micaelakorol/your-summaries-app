import styled from "styled-components";
import {ReactComponent as SvgRegister } from '../assets/registro.svg'
import {ReactComponent as Login } from '../assets/login.svg'


const Svg = styled(SvgRegister)`
	width: 100%;
	max-height: 6.25rem; /* 100px */
	margin-bottom: 1.25rem; /* 20px */
`;
 const SvgLogin = styled(Login)`
	width: 100%;
	max-height: 9rem;
	margin-bottom: 1.25rem; /* 20px */
`;

export {Svg, SvgLogin}