import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledResponsive = styled.nav`
	border-bottom: 2px solid rgb(250, 250, 250, 0.2);
	@media screen and (width>768px) {
		display: none;
	}
`;

const StyledHeader = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 20px 20px;
`;

const StyledHome = styled(NavLink)`
	font-size: 30px;
`;

const StyledMenuImg = styled.img`
	filter: grayscale(100%) invert(100%);
	height: 30px;
`;

const StyledPositionLinks = styled.ul`
	position: absolute;
	text-align: center;
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding-top: 50px;
	width: 100%;
	height: 100vh;
	background-color: black;
`;

export {
	StyledResponsive,
	StyledHeader,
	StyledHome,
	StyledMenuImg,
	StyledPositionLinks
};
