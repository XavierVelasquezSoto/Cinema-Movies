import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Menu from '../../components/menu/Menu';

const Movies = () => {
	const [movie, setMovie] = useState();
	const { id } = useParams();

	useEffect(() => {
		getMovieById(id, setMovie);
	}, []);

	return (
		<>
			<Menu />
			<h1>test</h1>
		</>
	);
};

const getMovieById = async (id, setMovie) => {
	const response = await fetch(`http://localhost:3000/${id}`);
	const movie = await response.json();
	setMovie(movie);
};

const updateMovie = async (event, id, movie, setMovie) => {
	event.preventDefault();
	const newMovieInfo = {
		title: event.target.title.value || movie.title,
		synopsis: event.target.synopsis.value || movie.synopsis,
		duration: event.target.duration.value || movie.duration,
		cast: event.target.cast.value || movie.cast,
		director: event.target.director.value || movie.director,
		genre: event.target.genre.value || movie.genre,
		mpaa: event.target.mpaa.value || movie.mpaa
	};
	const response = await fetch(`http://localhost:3000/${id}`, {
		method: 'PATCH',
		body: JSON.stringify(newMovieInfo),
		headers: {
			'Content-Type': 'application/json'
		}
	});
	const movieUpdated = await response.json();
	setMovie(movieUpdated);
};

export default Movies;
