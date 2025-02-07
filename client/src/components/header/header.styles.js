import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledContainerHeader = styled.div`
	display: none;

	@media screen and (width>=768px) {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 2px solid rgb(250, 250, 250, 0.2);
		padding: 20px;
	}
`;

const StyledContainerLink = styled.div`
	display: flex;
	gap: 30px;
`;

const StyledHeaderDesktop = styled(NavLink)`
	@media screen and (width>=768px) {
		display: block;
		font-size: 40px;
		font-weight: 600;
		/* border-bottom: 2px solid rgb(250, 250, 250, 0.2); */
		/* padding: 20px; */
	}
`;

export { StyledContainerHeader, StyledContainerLink, StyledHeaderDesktop };
