import { useState } from 'react';
import Menu from '../menu/Menu';
import {
	StyledContainerHeader,
	StyledContainerLink,
	StyledHeaderDesktop
} from './header.styles';
import { Link } from 'react-router-dom';

const Header = () => {
	const [menuActive, setMenuActive] = useState(false);

	return (
		<>
			<Menu />
			<StyledContainerHeader>
				<StyledHeaderDesktop to='/'>CINEMA</StyledHeaderDesktop>
				<StyledContainerLink>
					<Link to='/contact'>Contacto</Link>
					<Link to='/about-us'>Quiénes somos</Link>
				</StyledContainerLink>
			</StyledContainerHeader>
		</>
	);
};

export default Header;
