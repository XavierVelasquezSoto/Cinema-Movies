import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Movies from '../pages/movies/movies';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/movies' element={<Movies />} />
			{/* <Route path='/cinemaMovies/:id' /> */}
		</Routes>
	);
};

export default Router;
