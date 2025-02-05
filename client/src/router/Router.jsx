import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Movies from '../pages/movies/movies';
import Contact from '../pages/contact/Contact';
import AboutUs from '../pages/about-us/AboutUs';
import MovieInfo from '../pages/movie-info/MovieInfo';
import Ticket from '../pages/ticket/Ticket';

const Router = () => {
	return (
		<Routes>
			<Route index path='/' element={<Home />} />
			<Route path='/movies/' element={<Movies />} />
			<Route path='/contact/' element={<Contact />} />
			<Route path='/about-us/' element={<AboutUs />} />
			<Route path='/movie-info/' element={<MovieInfo />} />
			<Route path='/ticket/' element={<Ticket />} />
		</Routes>
	);
};

export default Router;
