import React from "react";
import {Map} from "./Map";
import {render} from "@testing-library/react";

describe("About", () => {
    it("renders correctly", () => {
        const {container} = render(<Map />)
        expect(container.innerHTML).toMatch("About")
    })
})