import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignInModal from "../SignInModal";

import axios from "axios";
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("<SignInModal />", () => {
  describe("<SignInModal />'s visibility", () => {
    test("appears when user clicks on Sign In button", () => {
      render(<SignInModal />);

      userEvent.click(screen.getByText("Sign in"));
      expect(screen.getByTestId("signin-modal")).toBeInTheDocument();
    });

    test("disappears when user clicks on Close button", () => {
      render(<SignInModal />);

      userEvent.click(screen.getByText("Sign in"));
      expect(screen.getByTestId("signin-modal")).toBeInTheDocument();

      userEvent.click(screen.getByRole("button", { name: "Close" }));
      expect(screen.queryByRole("dialog")).toBeNull();
    });
  });

  describe("<SignInModal />'s sign-in logic", () => {
    test("report user not found when input wrong email", async () => {
      mockedAxios.post.mockRejectedValueOnce({
        response: {
          data: {
            error: "User not found",
          },
        },
        status: 401,
      });
      const wrongEmail: string = "khoituan@qut.edu.au";
      const password: string = "password";
	  
      render(<SignInModal />);

      userEvent.click(screen.getByText("Sign in"));
      const inputEmail = screen.getByTestId("input-email");
      const inputPassword = screen.getByTestId("input-password");
      userEvent.type(inputEmail, wrongEmail);
      userEvent.type(inputPassword, password);
      userEvent.click(screen.getByText("Submit"));

      const message = await screen.findByTestId("response-msg-danger");

      expect(axios.post).toHaveBeenCalled();
      expect(message).toHaveTextContent("User not found");
    });

    test("return token when user signs in successfully", async () => {
      mockedAxios.post.mockResolvedValueOnce({
        data: {
          token: "fakeToken",
        },
        status: 200,
      });

      const correctEmail: string = "eve.holt@reqres.in";
      const password: string = "password";
	  
      render(<SignInModal />);
      userEvent.click(screen.getByText("Sign in"));
      const inputEmail = screen.getByTestId("input-email");
      const inputPassword = screen.getByTestId("input-password");
      userEvent.type(inputEmail, correctEmail);
      userEvent.type(inputPassword, password);
      userEvent.click(screen.getByText("Submit"));

      const message = await screen.findByTestId("response-msg-success");
      expect(axios.post).toHaveBeenCalled();
      expect(message).toHaveTextContent("Your response token is fakeToken");
    });
  });
});
