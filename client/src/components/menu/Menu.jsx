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
	return (
		<>
			<StyledResponsive>
				<StyledHeader>
					<StyledHome to='/' onClick={() => setMenuActive(false)}>
						CINEMA
					</StyledHome>
					{!menuActive && (
						<StyledMenuImg
							src='/assets/menu-img/open-menu.svg'
							alt='error open menu'
							onClick={() => setMenuActive(true)}
						/>
					)}
					{menuActive && (
						<StyledMenuImg
							src='/assets/menu-img/close-menu.svg'
							alt='error close menu'
							onClick={() => setMenuActive(false)}
						/>
					)}
				</StyledHeader>
				{menuActive && (
					<StyledPositionLinks>
						<Link to='/contact' onClick={() => setMenuActive(false)}>
							Contacto
						</Link>
						<Link to='/about-us' onClick={() => setMenuActive(false)}>
							Quiénes somos
						</Link>
					</StyledPositionLinks>
				)}
			</StyledResponsive>
		</>
	);
};

export default Menu;
