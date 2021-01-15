import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import {createMemoryHistory} from "history";

jest.mock("./pages/AuthComponent/AuthComponent", () =>({
  __esModule: true,
  default: () => <div>Home component</div>
}));

jest.mock("./pages/Map/Map", () => ({ Map: () => <div>Map content</div> }));
jest.mock("./pages/Profile/Profile", () => ({ ProfileWithAuth: () => <div>Profile content</div> }));

describe("App", () => {
  it("renders correctly", () => {
    const mockStore = {
      getState: () => ({auth: {isLoggedIn: true}}),
      subscribe: () => {},
      dispatch: () => {},
    }

    const history = createMemoryHistory();

    const {container} = render(
        <Router history={history}>
            <Provider>
              <App page='login' store={mockStore} />
            </Provider>
        </Router>
        );
    expect(container.innerHTML).toMatch("Home component");
  });

  describe("when clicked on navigation buttons", () => {
     it("opens the corresponding page", () => {
         const mockStore = {
             getState: () => {},
             subscribe: () => {},
             dispatch: () => {},
         }

         const history = createMemoryHistory();

         const { container, getByText} = render(
             <Router history={history}>
                 <Provider>
                     <App page='login' store={mockStore} />
                 </Provider>
             </Router>
         );
       fireEvent.click(getByText('Map'));
       expect(container.innerHTML).toMatch("Map content");
       fireEvent.click(getByText('Profile'));
       expect(container.innerHTML).toMatch("Profile content");
     });
   });
});
