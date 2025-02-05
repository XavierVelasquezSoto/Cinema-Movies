import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
	StyledHeader,
	StyledHome,
	StyledMenuImg,
	StyledPositionLinks
} from './menu.styles';

const Menu = () => {
	const [menuActive, setMenuActive] = useState(false);
	return (
		<>
			<nav>
				<StyledHeader>
					<StyledHome to='/' onClick={() => setMenuActive(menuActive)}>
						CINEMA
					</StyledHome>
					{menuActive && (
						<StyledMenuImg
							src='/assets/menu-img/open-menu.svg'
							alt='error open menu'
							onClick={() => setMenuActive(!menuActive)}
						/>
					)}
					{!menuActive && (
						<StyledMenuImg
							src='/assets/menu-img/close-menu.svg'
							alt='error close menu'
							onClick={() => setMenuActive(!menuActive)}
						/>
					)}
				</StyledHeader>
				{!menuActive && (
					<StyledPositionLinks>
						<li>Películas</li>
						<li>Contacto</li>
						<li>Quiénes somos</li>
					</StyledPositionLinks>
				)}
			</nav>
		</>
	);
};

export default Menu;
