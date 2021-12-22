import { render, screen, cleanup, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, NavLink } from 'react-router-dom';
import NavBarMenu, {elements, formatKey} from '../NavBarMenu';
import { Menu } from "antd";

const { SubMenu } = Menu;

afterEach(cleanup);


test('render submenus correctly', async () => {
	render(<NavBarMenu />, {wrapper: MemoryRouter});
	
	for(let itemGroup of Object.keys(elements)) {
		const itemGroupComponent = screen.getByText(itemGroup)
		expect(itemGroupComponent).toBeInTheDocument();
		// await waitFor(() => screen.findByTestId("dropdown-menu"))
		
		// for(let item of elements[itemGroup]) {
		// 	console.log(item);
		// 	expect(screen.getByText(item)).toBeInTheDocument();
		// }

		// console.log('----' + "\n")

		// fireEvent.mouseLeave(itemGroupComponent);
		// await waitFor(() => screen.findByTestId("dropdown-menu"))
	}
})