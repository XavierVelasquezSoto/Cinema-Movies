import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Contact from '../pages/contact/Contact';
import AboutUs from '../pages/about-us/AboutUs';
import MovieInfo from '../pages/movie-info/MovieInfo';
import Ticket from '../pages/ticket/Ticket';
import Movie from '../pages/movie/Movie';

const Router = () => {
	return (
		<Routes>
			<Route index path='/' element={<Home />} />
			<Route path='/movie/:id' element={<Movie />} />
			<Route path='/contact/' element={<Contact />} />
			<Route path='/about-us/' element={<AboutUs />} />
			{/* <Route path='/movie-info/' element={<MovieInfo />} /> */}
			<Route path='/ticket/:id/:date/:hour/:hall' element={<Ticket />} />
		</Routes>
	);
};

export default Router;
