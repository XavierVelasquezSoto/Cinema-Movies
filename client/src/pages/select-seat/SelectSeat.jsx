import { useLocation } from 'react-router-dom';
import Header from '../../components/header/Header';
import { useState } from 'react';
import {
	StyledContainerSeat,
	StyledImgSeatMovie,
	StyledMovieDescription,
	StyledSpan
} from './select-seat.styles';

const SelectSeat = () => {
	const location = useLocation();

	const { totalTicket, movie, image, date, hour, price } = location.state;

	const limit = 10;

	const [selectChairs, setSelectChairs] = useState([]);

	// console.log('imagen:', image);
	return (
		<>
			<Header />
			<StyledContainerSeat>
				<StyledMovieDescription>
					<StyledImgSeatMovie src={image} alt='' />
					<div>
						<h3>
							Película: <StyledSpan>{movie}</StyledSpan>
						</h3>
						<h3>
							Fecha: <StyledSpan>{date}</StyledSpan>
						</h3>
						<h3>
							Función: <StyledSpan>{hour}</StyledSpan>
						</h3>
						<h3>
							Total a pagar: <StyledSpan>{price}€</StyledSpan>
						</h3>
						<h3>
							Entradas: <StyledSpan>{totalTicket}</StyledSpan>
						</h3>
					</div>
				</StyledMovieDescription>
				<div>
					<div>
						<button>
							<img
								src='/assets/cinema-extra/chair-furniture-living-sofa.svg'
								alt=''
							/>
						</button>
					</div>
					<button>comprar</button>
				</div>
			</StyledContainerSeat>
		</>
	);
};

export default SelectSeat;
