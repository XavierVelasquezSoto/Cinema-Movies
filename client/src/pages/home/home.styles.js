import styled from 'styled-components';

const StyledMoviesGrid = styled.div`
	@media screen and (width>768px) {
		width: 90%;
		max-width: 1000px;
		margin-inline: auto;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 20px;
	}
`;

const StyledPremiere = styled.h1`
	text-align: center;
	margin: 65px 0;
`;

const StyledContainerMovie = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const StyledImgMovie = styled.img`
	width: 200px;
	height: 280px;
	border-radius: 10px;
`;

const StyledTitleMovie = styled.h3`
	margin-bottom: 50px;
	text-decoration: underline;
`;

export {
	StyledMoviesGrid,
	StyledPremiere,
	StyledContainerMovie,
	StyledImgMovie,
	StyledTitleMovie
};
