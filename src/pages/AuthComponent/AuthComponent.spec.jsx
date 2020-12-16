import React from "react";
import AuthComponent from "./AuthComponent";
import { render } from "@testing-library/react";

describe("AuthComponent", () => {
    it("render correctly", () => {
        const { container } = render(<AuthComponent />);
        console.log(container);

        expect(getByLabelText('Email:')).toHaveAttribute('name', 'email');
        expect(getByLabelText('Password:')).toHaveAttribute('name', 'password');
    })
})