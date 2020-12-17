import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AuthComponent from "./AuthComponent";

jest.mock("../loginForm/loginForm", () => ({LoginForm: () => <div>Login content</div>}))
jest.mock("../registrationForm/registrationForm", () => ({RegistrationForm: () => <div>Reg content</div>}))

describe("AuthComponent", () => {
    it("renders correctly", () => {
        const {container} = render(<AuthComponent />);
        expect(container.innerHTML).toMatch("Login content");
    });
})