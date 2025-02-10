import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledContainerId = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 30px;
	width: 90%;
	margin-inline: auto;

	@media screen and (width>768px) {
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		width: 100%;
		margin-top: 100px;
	}
`;

const StyledMovieContainerImage = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 60px;

	@media screen and (width>768px) {
		padding: 0;
	}
`;

const StyledMovieImage = styled.img`
	height: auto;
	padding: 40px;

	@media screen and (width>768px) {
		width: auto;
		height: 280px;
		padding: 0;
	}
`;

const StyledMovieInfo = styled.div`
	@media screen and (width>768px) {
		grid-column: 3/3;
		padding: 0 80px;
	}
`;

const StyledTechnicalSheet = styled.div`
	@media screen and (width>768px) {
		grid-column: 2/3;
		grid-row: 1/3;
		padding-right: 20px;
	}
`;

const StyledTitleMovieSelect = styled.h1`
	@media screen and (width>=768px) {
		margin: 0;
	}
`;

const StyledDirectorMovieSelect = styled.h3`
	@media screen and (width>=768px) {
		margin: 0;
	}
`;

// date hours

const StyledDateSelectId = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 50px;
	padding-bottom: 50px;
`;
const StyledDateContainerButton = styled.div`
	display: flex;
	gap: 20px;
`;
const StyledDateButton = styled.button`
	border: none;
	border-bottom: ${props => (props.$activeDate ? 'blue 2px solid' : 'inherit')};
	background-color: inherit;
	color: #fff;
	font-size: 20px;
	cursor: pointer;
`;
const StyledHourContainer = styled.div`
	display: flex;
	gap: 50px;
	margin-top: 20px;
`;
const StyledHourSelect = styled(NavLink)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	border-bottom: 2px solid rgb(255, 255, 255, 0.3);
	width: 100px;
	padding: 10px;
`;

const StyledHall = styled.p`
	margin: 0;
	padding: 10px 0;
`;

export {
	StyledContainerId,
	StyledMovieContainerImage,
	StyledMovieImage,
	StyledMovieInfo,
	StyledTechnicalSheet,
	StyledTitleMovieSelect,
	StyledDirectorMovieSelect,
	StyledDateSelectId,
	StyledDateContainerButton,
	StyledDateButton,
	StyledHourContainer,
	StyledHourSelect,
	StyledHall
};
