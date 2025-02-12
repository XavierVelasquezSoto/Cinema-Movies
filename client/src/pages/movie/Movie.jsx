import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import {
	StyledContainerId,
	StyledDateButton,
	StyledDateContainerButton,
	StyledDateSelectId,
	StyledDirectorMovieSelect,
	StyledHall,
	StyledHourContainer,
	StyledHourSelect,
	StyledMovieContainerImage,
	StyledMovieImage,
	StyledMovieInfo,
	StyledTechnicalSheet,
	StyledTitleMovieSelect
} from './movie.styles';

const Movies = () => {
	const [movie, setMovie] = useState();
	const { id } = useParams();

	useEffect(() => {
		getMovieById(id, setMovie);
	}, []);

	const [date, setDate] = useState(0);

	return (
		<>
			<Header />

			{movie && (
				<StyledContainerId key={movie._id}>
					<StyledMovieContainerImage>
						<StyledMovieImage src={movie.images} alt='' />
					</StyledMovieContainerImage>
					<StyledMovieInfo>
						<StyledTitleMovieSelect>{movie.title}</StyledTitleMovieSelect>
						<h3>Duración</h3>
						<p>{movie.duration}</p>
						<h3>Fecha de estreno</h3>
						<p>{movie.releaseDate}</p>
						<h3>Género</h3>
						<p>{movie.genre}</p>
						<h3>Clasificación</h3>
						<p>{movie.mpaa}</p>
					</StyledMovieInfo>
					<StyledTechnicalSheet>
						<StyledDirectorMovieSelect>Director</StyledDirectorMovieSelect>
						<p>{movie.director}</p>
						<h3>Reparto</h3>
						<p>{movie.cast}</p>
						<h3>Sinopsis</h3>
						<p>{movie.synopsis}</p>
					</StyledTechnicalSheet>
				</StyledContainerId>
			)}
			<>
				{movie && (
					<StyledDateSelectId key={movie._id}>
						<StyledDateContainerButton>
							<StyledDateButton
								$activeDate={date === 0}
								onClick={() => setDate(0)}
							>
								{movie.date[0]}
							</StyledDateButton>
							<StyledDateButton
								$activeDate={date === 1}
								onClick={() => setDate(1)}
							>
								{movie.date[1]}
							</StyledDateButton>
							<StyledDateButton
								$activeDate={date === 2}
								onClick={() => setDate(2)}
							>
								{movie.date[2]}
							</StyledDateButton>
						</StyledDateContainerButton>
						<StyledHourContainer>
							{movie.hours[date].map((hour, index) => (
								<StyledHourSelect
									key={index}
									to={`/ticket/${movie._id}/${movie.date[date]}/${hour}/${movie.hall[index]}`}
								>
									{hour}
									<StyledHall>Sala:{movie.hall[index]}</StyledHall>
								</StyledHourSelect>
							))}
						</StyledHourContainer>
					</StyledDateSelectId>
				)}
			</>
		</>
	);
};

const getMovieById = async (id, setMovie) => {
	const response = await fetch(`http://localhost:3000/api/cinemaMovies/${id}`);
	const movieList = await response.json();
	setMovie(movieList);
};

export default Movies;
