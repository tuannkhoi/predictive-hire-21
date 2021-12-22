import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SignInModal from '../SignInModal';

import axios from 'axios';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

test("modal is visible when user click on Sign In Button & disappear when click on close button", () => {
	render(<SignInModal />);
	
	fireEvent.click(screen.getByText('Sign in'));
	expect(screen.getByTestId('signin-modal')).toBeInTheDocument();

	fireEvent.click(screen.getByRole('button', { name: "Close" }));
	expect(screen.queryByRole('dialog')).toBeNull();
});

describe("Sign In logic", () => {
	test("report user not found when input wrong email", async () => {
		mockedAxios.post.mockRejectedValueOnce({
			response: {
				data: {
					error: 'User not found'
				}
			},
			status: 401
		});

		render(<SignInModal />);
		fireEvent.click(screen.getByText('Sign in'));

		const wrongEmail: string = "khoituan@qut.edu.au";
		const password: string = "password";

		const inputEmail = screen.getByTestId('input-email');
		const inputPassword = screen.getByTestId('input-password');

		fireEvent.change(inputEmail, {target: {value: wrongEmail}});
		fireEvent.change(inputPassword, {target: {value: password}});
		fireEvent.click(screen.getByText('Submit'));
		
		await waitFor(() => screen.findByTestId("response-msg-danger"));

		expect(axios.post).toHaveBeenCalled();
		expect(screen.getByTestId("response-msg-danger")).toHaveTextContent('User not found')
	});

	test("return token when user signs in successfully", async () => {
		mockedAxios.post.mockResolvedValueOnce({
			data: {
				token: 'fakeToken'
			},
			status: 200
		});

		render(<SignInModal />);
		fireEvent.click(screen.getByText('Sign in'));

		const correctEmail: string = "eve.holt@reqres.in";
		const password: string = "password";

		const inputEmail = screen.getByTestId('input-email');
		const inputPassword = screen.getByTestId('input-password');

		fireEvent.change(inputEmail, {target: {value: correctEmail}});
		fireEvent.change(inputPassword, {target: {value: password}});
		fireEvent.click(screen.getByText('Submit'));
		
		await waitFor(() => screen.findByTestId("response-msg-success"));

		expect(axios.post).toHaveBeenCalled();
		expect(screen.getByTestId("response-msg-success")).toHaveTextContent('Your response token is fakeToken')
	});
})