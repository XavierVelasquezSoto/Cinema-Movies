import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 50px;

	@media screen and (width>768px) {
		display: flex;
		justify-content: space-evenly;
	}
`;

const StyledDivKeyTicket = styled.div`
	display: flex;
	width: 90%;
	margin-bottom: 30px;
`;

const StyledImageTicket = styled.img`
	width: 30%;
	margin-right: 50px;
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
`;

const StyledMaxTextTicket = styled.p`
	text-align: center;
`;

const StyledBoxAdult = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 250px;
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
	/* justify-content: space-evenly; */
	width: 250px;
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
`;

const StyledButtonIncrement = styled.button`
	border: none;
	background-color: inherit;
	color: #fff;

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
	StyledDivKeyTicket
};
