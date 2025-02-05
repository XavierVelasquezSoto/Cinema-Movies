import { useState } from 'react';
import {
	StyledHeader,
	StyledHome,
	StyledMenuImg,
	StyledPositionLinks,
	StyledResponsive
} from './menu.styles';
import { Link } from 'react-router-dom';

const Menu = () => {
	const [menuActive, setMenuActive] = useState(false);
	const toggleMenu = () => setMenuActive(!menuActive);
	return (
		<>
			<StyledResponsive>
				<StyledHeader>
					<StyledHome to='/'>CINEMA</StyledHome>
					{!menuActive && (
						<StyledMenuImg
							src='/assets/menu-img/open-menu.svg'
							alt='error open menu'
							// $isOpen={!menuActive}
							onClick={toggleMenu}
						/>
					)}
					{menuActive && (
						<StyledMenuImg
							src='/assets/menu-img/close-menu.svg'
							alt='error close menu'
							// $isOpen={!menuActive}
							onClick={toggleMenu}
						/>
					)}
				</StyledHeader>
				{menuActive && (
					<StyledPositionLinks>
						<Link to='/movies' onClick={toggleMenu}>
							Películas
						</Link>
						<Link to='/contact' onClick={toggleMenu}>
							Contacto
						</Link>
						<Link to='/about-us' onClick={toggleMenu}>
							Quiénes somos
						</Link>
					</StyledPositionLinks>
				)}
			</StyledResponsive>
		</>
	);
};

export default Menu;
