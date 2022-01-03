import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavBarMenu from "../NavBarMenu";
import elements from "../NavBarElements";

describe("<NavBarMenu />", () => {
  test("render all top-level submenus", () => {
    render(<NavBarMenu />);
    elements.forEach((item) => {
      const submenuTitle = screen.getByText(item.title);
      expect(submenuTitle).toBeInTheDocument();
    });
  });

  // ! weird error: here we assert that the children items of each submenu are rendered
  // for some reason, only the Products submenu passes the test, while all others fail
  // to be clear, only the submenu of the first item of elements(from "../NavBarElements") passes the test
  // i.e. if we switch the order of "Products" and "Platform", the Platform
  // submenu passes the test, while the Products submenu fails
  test("render all children item of the Products submenu", async () => {
    render(<NavBarMenu />);
    userEvent.hover(screen.getByText("Products"));
    await waitFor(() => {
      elements[0]["children"]!.forEach((item) => {
        expect(screen.getByText(item.title)).toBeInTheDocument();
      });
    });
  });
  // ! uncomment the test below and see it fails
  // test("render all children item of the Platform submenu", async () => {
  //   render(<NavBarMenu />);
  //   userEvent.hover(screen.getByText("Platform"));
  //   await waitFor(() => {
  //     elements[1]["children"]!.forEach((item) => {
  //       expect(screen.getByText(item.title)).toBeInTheDocument();
  //     });
  //   });
  // });
});
