import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBarMenu, {elements, formatKey} from '../NavBarMenu';
import LocationDisplay from '../../../LocationDisplay';

test('render nested menu correctly', () => {
	render(
		<MemoryRouter>
			<NavBarMenu />
			<LocationDisplay />
		</MemoryRouter>
	);
	
	for(let key of Object.keys(elements)) {
		fireEvent.click(screen.getByText(key));
		
		for (let value of elements[key]) {
			fireEvent.click(screen.getByText(value));
			expect(screen.getByTestId('location-display')).toHaveTextContent(formatKey(value));
		}
	}
})