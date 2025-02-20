import { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import { Link, useParams } from 'react-router-dom';
import {
	StyledBoxAdult,
	StyledBoxChild,
	StyledButtonDecrement,
	StyledButtonIncrement,
	StyledButtonNext,
	StyledContainer,
	StyledContainerButton,
	StyledContainerTicket,
	StyledDivKeyTicket,
	StyledImageTicket,
	StyledMaxTextTicket,
	StyledName,
	StyledNumberSpan,
	StyledPrice,
	StyledTextTicket,
	StyledYearRange
} from './ticket.styles';

const Ticket = () => {
	const [ticket, setTicket] = useState();

	const { id, date, hour } = useParams();

	useEffect(() => {
		getMovieById(id, setTicket);
	}, []);

	const [countAdult, setCountAdult] = useState(0);
	const [countChild, setCountChild] = useState(0);

	const incrementAdult = () => {
		if (countAdult + countChild < 10) {
			setCountAdult(countAdult + 1);
		}
	};

	const decrementAdult = () => {
		if (countAdult > 0) {
			setCountAdult(countAdult - 1);
		}
	};

	const incrementChild = () => {
		if (countAdult + countChild < 10) {
			setCountChild(countChild + 1);
		}
	};

	const decrementChild = () => {
		if (countChild > 0) {
			setCountChild(countChild - 1);
		}
	};

	const totalPrice = countAdult * 9 + countChild * 7.5;
	const initialPrice = totalPrice === 0 ? totalPrice : totalPrice.toFixed(1);

	return (
		<>
			<Header />
			{ticket && (
				<StyledContainer>
					<StyledDivKeyTicket key={ticket._id}>
						<StyledImageTicket src={ticket.images} alt='' />
						<div>
							<p>
								<StyledName>Película: </StyledName>
								{ticket.title}
							</p>
							<p>
								<StyledName>Función: </StyledName>
								{hour}
							</p>
							<p>
								<StyledName>Fecha: </StyledName>
								{date}
							</p>
							<StyledName>Total: {initialPrice}€</StyledName>
						</div>
					</StyledDivKeyTicket>
					<div>
						<StyledTextTicket>Selecciona tus entradas:</StyledTextTicket>
						<StyledMaxTextTicket>
							Puedes comprar 10 entradas máximo por transacción.
						</StyledMaxTextTicket>

						<StyledContainerTicket>
							<StyledBoxAdult>
								<StyledYearRange>Adulto</StyledYearRange>
								<StyledPrice>9€</StyledPrice>
								<StyledContainerButton>
									<StyledButtonDecrement onClick={decrementAdult}>
										-
									</StyledButtonDecrement>
									<StyledNumberSpan>{countAdult}</StyledNumberSpan>
									<StyledButtonIncrement
										onClick={incrementAdult}
										disabled={countAdult + countChild >= 10}
									>
										+
									</StyledButtonIncrement>
								</StyledContainerButton>
							</StyledBoxAdult>
							<StyledBoxChild>
								<StyledYearRange>Menor</StyledYearRange>
								<StyledPrice>7,5€</StyledPrice>
								<StyledContainerButton>
									<StyledButtonDecrement onClick={decrementChild}>
										-
									</StyledButtonDecrement>
									<StyledNumberSpan>{countChild}</StyledNumberSpan>
									<StyledButtonIncrement
										onClick={incrementChild}
										disabled={countAdult + countChild >= 10}
									>
										+
									</StyledButtonIncrement>
								</StyledContainerButton>
							</StyledBoxChild>
							<Link
								to='/select-seat/'
								state={{
									totalTicket: countAdult + countChild,
									movie: ticket.title,
									image: ticket.images,
									date: date,
									hour: hour,
									price: initialPrice
								}}
							>
								<StyledButtonNext disabled={countAdult + countChild === 0}>
									Confirmación
								</StyledButtonNext>
							</Link>
						</StyledContainerTicket>
					</div>
				</StyledContainer>
			)}
		</>
	);
};

const getMovieById = async (id, setTicket) => {
	const response = await fetch(`http://localhost:3000/api/cinemaMovies/${id}`);
	const movieList = await response.json();
	setTicket(movieList);
};

export default Ticket;
