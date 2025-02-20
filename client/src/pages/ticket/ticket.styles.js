import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 50px;
	padding-bottom: 100px;

	@media screen and (width>768px) {
		flex-direction: row;
		width: 90%;
		max-width: 1000px;
		margin: auto;
		padding-top: 200px;
	}
`;

const StyledDivKeyTicket = styled.div`
	display: flex;
	width: 90%;
	margin-bottom: 30px;
	align-items: center;

	@media screen and (width>768px) {
		justify-content: space-evenly;
		margin-bottom: 0;
	}
`;

const StyledImageTicket = styled.img`
	width: 30%;
	margin-right: 50px;
	@media screen and (width>768px) {
		width: 100%;
		max-width: 250px;
		height: auto;
	}
`;

const StyledName = styled.span`
	font-size: 16px;
	font-weight: 600;
`;

const StyledContainerTicket = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 30px;
	padding-top: 35px;
`;

const StyledTextTicket = styled.p`
	text-align: center;
	@media screen and (width>768px) {
		margin: 0;
	}
`;

const StyledMaxTextTicket = styled.p`
	text-align: center;
`;

const StyledBoxAdult = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 250px;
	max-width: 250px;
	min-height: auto;
	background-color: inherit;
	border-radius: 50px;
	border: 1px #b2b2b2 solid;
`;

const StyledYearRange = styled.p`
	margin-left: 20px;
`;

const StyledPrice = styled.p`
	padding-left: 30px;
	text-align: right;
`;

const StyledBoxChild = styled.div`
	display: flex;
	align-items: center;
	width: 250px;
	max-width: 250px;
	min-height: auto;
	background-color: inherit;
	border-radius: 50px;
	border: 1px #b2b2b2 solid;
`;

const StyledContainerButton = styled.div`
	border: 1px #b2b2b2 solid;
	border-radius: 50px;
	display: flex;
	align-items: center;
	gap: 10px;
	margin-left: auto;
	margin-right: 25px;
`;

const StyledButtonDecrement = styled.button`
	border: none;
	background-color: inherit;
	color: #fff;
	cursor: pointer;
`;

const StyledButtonIncrement = styled.button`
	border: none;
	background-color: inherit;
	color: #fff;
	cursor: pointer;

	&:disabled {
		color: rgb(255, 255, 255, 0.5);
		cursor: not-allowed;
	}
`;

const StyledNumberSpan = styled.span`
	font-size: 15px;
	width: 15px;
	text-align: center;
`;

// const StyledButtonNext = styled(Link)`

// `;
const StyledButtonNext = styled.button`
	margin-top: 30px;
	text-align: center;
	font-size: 20px;
	font-weight: 600;
	border-radius: 80px;
	border: none;
	height: 50px;
	width: 180px;
	margin: auto;
	background-color: #fff;
	color: black;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		background-color: rgb(38, 110, 128, 0.5);
		color: #fff;
	}

	&:disabled {
		background-color: transparent;
		color: transparent;
	}

	&:disabled:hover {
		background-color: transparent;
		color: transparent;
	}
`;
export {
	StyledName,
	StyledContainerTicket,
	StyledBoxAdult,
	StyledBoxChild,
	StyledContainerButton,
	StyledButtonDecrement,
	StyledButtonIncrement,
	StyledYearRange,
	StyledPrice,
	StyledMaxTextTicket,
	StyledNumberSpan,
	StyledContainer,
	StyledTextTicket,
	StyledImageTicket,
	StyledDivKeyTicket,
	StyledButtonNext
};
