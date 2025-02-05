import { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
	const [menuActive, setMenuActive] = useState(false);
	return (
		<div>
			<nav>
				<div>
					<Link to='/' onClick={() => setMenuActive(menuActive)}>
						CINEMA
					</Link>
					<img src='/assets/menu-img/open-menu.svg' alt='error menu' />
				</div>
				<ul>
					<li>Películas</li>
					<li>Contacto</li>
					<li>Quiénes somos</li>
				</ul>
				{/* <ul>
                    <li>Inicia sesión</li>
                    <li>Regístrate</li>
                </ul> */}
			</nav>
		</div>
	);
};

export default Menu;
