import React from "react";
import { render, cleanup } from "@testing-library/react";
import {AuthComponent} from "./AuthComponent";

afterEach(cleanup);

jest.mock("../loginForm/loginForm", () => ({LoginForm: () => <div>Login content</div>}))
jest.mock("../registrationForm/registrationForm", () => ({RegistrationForm: () => <div>Reg content</div>}))

describe("AuthComponent", () => {
    it("renders correctly", () => {
        const {container} = render(<AuthComponent />);
        console.log(container);
        expect(container.innerHTML).toMatch("Login content");
    });
})