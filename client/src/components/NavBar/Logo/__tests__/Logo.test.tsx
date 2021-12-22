import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Logo from '../Logo';
import LocationDisplay from '../../../LocationDisplay';

test('render logo element correctly', () => {
	render(
		<MemoryRouter initialEntries={['/not/the/root/route']}>
			<Logo />
			<LocationDisplay />
		</MemoryRouter>
	);
	fireEvent.click(screen.getByText('Predictive Hire')); 
	expect(screen.getByTestId('location-display')).toHaveTextContent('/');
});