import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 20px 20px;
`;

const StyledHome = styled(NavLink)`
	font-size: 30px;
`;

const StyledMenuImg = styled.img`
	height: 30px;
`;

const StyledPositionLinks = styled.ul`
	position: relative;
	text-align: center;
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding-top: 50px;
	width: 100%;
	height: 100vh;
	background-color: black;
`;

export { StyledHeader, StyledHome, StyledMenuImg, StyledPositionLinks };
