import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import {
	StyledContainerMovie,
	StyledImgMovie,
	StyledMoviesGrid,
	StyledPremiere,
	StyledTitleMovie
} from './home.styles';

const Home = () => {
	const [movieList, setMovieList] = useState();

	useEffect(() => {
		getAllMovies(setMovieList);
	}, []);

	return (
		<>
			<Header />
			<StyledPremiere>Películas de estreno</StyledPremiere>
			<StyledMoviesGrid>
				{movieList &&
					movieList.map(movie => {
						return (
							<StyledContainerMovie key={movie._id}>
								<Link to={`/movie/${movie._id}`}>
									<StyledImgMovie src={movie.images} alt='error interstellar' />
								</Link>
								<Link to={`/movie/${movie._id}`}>
									<StyledTitleMovie>{movie.title}</StyledTitleMovie>
								</Link>
							</StyledContainerMovie>
						);
					})}
			</StyledMoviesGrid>
		</>
	);
};

const getAllMovies = async setMovieList => {
	const response = await fetch(`http://localhost:3000/api/cinemaMovies`);
	const movieList = await response.json();
	setMovieList(movieList);
};
// const updateMovie = async (event, id, movieList, setMovieList) => {
// 	const newMovieInfo = {
// 		title: event.target.title.value || movieList.title,
// 		synopsis: event.target.synopsis.value || movieList.synopsis
// 	};
// 	const response = await fetch(`http://localhost:3000/${id}`, {
// 		method: 'PATCH',
// 		body: JSON.stringify(newMovieInfo),
// 		headers: {
// 			'content-type': 'application/json'
// 		}
// 	});
// 	const movieUpdate = await response.json();
// 	setMovieList(movieUpdate);
// };

export default Home;
