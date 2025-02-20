import { useLocation } from 'react-router-dom';
import Header from '../../components/header/Header';
import { useState } from 'react';

const SelectSeat = () => {
	const location = useLocation();

	const { totalTicketmovie, image, date, hour } = location.state;

	const limit = 10;

	const [selectChairs, setSelectChairs] = useState([]);

	console.log('imagen:', image);
	return (
		<>
			<Header />
			<div>
				<p>{totalTicketmovie}</p>
				<img src={image} alt='' />
				<p>{date}</p>
				<p>{hour}</p>
			</div>
		</>
	);
};

export default SelectSeat;
