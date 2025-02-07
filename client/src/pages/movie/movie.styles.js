import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 90%;
	margin-inline: auto;

	@media screen and (width>768px) {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
`;

const StyledMovieContainerImage = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 60px;
`;

const StyledMovieImage = styled.img`
	width: 50%;
`;

const StyledMovieInfo = styled.div`
	@media screen and (width>768px) {
		grid-column: 3/3;
	}
`;

const StyledTechnicalSheet = styled.div`
	@media screen and (width>768px) {
		grid-column: 2/3;
		grid-row: 1/3;
	}
`;

export {
	StyledContainer,
	StyledMovieContainerImage,
	StyledMovieImage,
	StyledMovieInfo,
	StyledTechnicalSheet
};
