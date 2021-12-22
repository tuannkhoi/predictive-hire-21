import { useLocation } from 'react-router-dom';

export default function LocationDisplay() {
	const location = useLocation();
	console.log(typeof location);
	return (
		<div data-testid="location-display">
			{location.pathname}
		</div>
	)
}