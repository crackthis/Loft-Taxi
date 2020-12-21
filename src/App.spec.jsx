import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

jest.mock("./pages/AuthComponent/AuthComponent", () =>({
  __esModule: true,
  default: () => <div>Home component</div>
}));

jest.mock("./pages/Map/Map", () => ({ Map: () => <div>Map content</div> }));
jest.mock("./pages/Profile/Profile", () => ({ ProfileWithAuth: () => <div>Profile content</div> }));

describe("App", () => {
  it("renders correctly", () => {
    const {container} = render(<App page='login' />);
    expect(container.innerHTML).toMatch("Home component");
  });

//   describe("when clicked on navigation buttons", () => {
//     it("opens the corresponding page", () => {
//       const { getByText, container } = render(<App isLoggedIn />);
//       fireEvent.click(getByText('Map'));
//       expect(container.innerHTML).toMatch("Map content");
//       fireEvent.click(getByText('Profile'));
//       expect(container.innerHTML).toMatch("Profile content");
//     });
//   });
});
