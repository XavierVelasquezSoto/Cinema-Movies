import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import {
	StyledContainer,
	StyledMovieContainerImage,
	StyledMovieImage,
	StyledMovieInfo,
	StyledTechnicalSheet
} from './movie.styles';

const Movies = () => {
	const [movie, setMovie] = useState();
	const { id } = useParams();

	useEffect(() => {
		getMovieById(id, setMovie);
	}, []);

	return (
		<>
			<Header />
			{movie && (
				<StyledContainer key={movie._id}>
					<StyledMovieContainerImage>
						<StyledMovieImage src={movie.images} alt='' />
					</StyledMovieContainerImage>
					<StyledMovieInfo>
						<h1>{movie.title}</h1>
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
						<h3>Director</h3>
						<p>{movie.director}</p>
						<h3>Reparto</h3>
						<p>{movie.cast}</p>
						<h3>Sinopsis</h3>
						<p>{movie.synopsis}</p>
					</StyledTechnicalSheet>
				</StyledContainer>
			)}
		</>
	);
};

const getMovieById = async (id, setMovie) => {
	const response = await fetch(`http://localhost:3000/api/cinemaMovies/${id}`);
	const movieList = await response.json();
	setMovie(movieList);
};

// const getMovieById = async (id, setMovie) => {
// 	const response = await fetch(`http://localhost:3000/${id}`);
// 	const movie = await response.json();
// 	setMovie(movie);
// };

// const updateMovie = async (event, id, movie, setMovie) => {
// 	event.preventDefault();
// 	const newMovieInfo = {
// 		title: event.target.title.value || movie.title,
// 		synopsis: event.target.synopsis.value || movie.synopsis,
// 		duration: event.target.duration.value || movie.duration,
// 		cast: event.target.cast.value || movie.cast,
// 		director: event.target.director.value || movie.director,
// 		genre: event.target.genre.value || movie.genre,
// 		mpaa: event.target.mpaa.value || movie.mpaa
// 	};
// 	const response = await fetch(`http://localhost:3000/${id}`, {
// 		method: 'PATCH',
// 		body: JSON.stringify(newMovieInfo),
// 		headers: {
// 			'Content-Type': 'application/json'
// 		}
// 	});
// 	const movieUpdated = await response.json();
// 	setMovie(movieUpdated);
// };

export default Movies;
