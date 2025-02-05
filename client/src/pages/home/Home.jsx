import { useEffect, useState } from 'react';
import Menu from '../../components/menu/Menu';
import { useParams } from 'react-router-dom';

const Home = () => {
	const [movieList, setMovieList] = useState();
	const { id } = useParams();

	useEffect(() => {
		getMovieById(id, setMovieList);
	}, []);

	return (
		<>
			<Menu />
			<h1>Películas de estreno</h1>
			{movieList &&
				movieList.map(movie => {
					return (
						<div key={movie._id}>
							<h2>{movie.title}</h2>
						</div>
					);
				})}
		</>
	);
};

const getMovieById = async (id, setMovieList) => {
	const response = await fetch(`http://localhost:3000/${id}`);
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
