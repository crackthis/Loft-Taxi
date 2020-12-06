import React from "react";
import { AuthComponent } from "./AuthComponent";
import { render } from "@testing-library/react";

describe("AuthComponent", () => {
    it("render correctly", () => {
        const { getByLabelText } = render(<AuthComponent />)

        expect(getByLabelText('Email:')).toHaveAttribute('name', 'email');
        expect(getByLabelText('Password:')).toHaveAttribute('name', 'password');
    })
})