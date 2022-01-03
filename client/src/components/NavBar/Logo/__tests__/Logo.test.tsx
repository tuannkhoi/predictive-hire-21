import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import Logo from "../Logo";
import LocationDisplay from "../../../LocationDisplay";

describe("<Logo />", () => {
  test("render the 'Predictive Hire' text", () => {
    render(<Logo />, {wrapper: MemoryRouter});

    const logo = screen.getByText("Predictive Hire");
    expect(logo).toBeInTheDocument();
  });

  test("navigate to route '/' when clicked on", () => {
    render(
      <MemoryRouter initialEntries={["/not/the/root/route"]}>
        <Logo />
        <LocationDisplay />
      </MemoryRouter>
    );

    userEvent.click(screen.getByText("Predictive Hire"));

    expect(screen.getByTestId("location-display")).toHaveTextContent("/");
  });
});
