import { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import { useParams } from 'react-router-dom';

const Ticket = () => {
	const [ticket, setTicket] = useState();
	const { id, hour } = useParams();

	useEffect(() => {
		getMovieById(id, setTicket);
	}, []);

	return (
		<>
			<Header />
			{ticket && (
				<>
					<h1>SESIÓN {hour}</h1>

					<div>
						<h1></h1>
					</div>
				</>
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
