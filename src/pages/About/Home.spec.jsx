import React from "react";
import {Home} from "./Home";
import {render} from "@testing-library/react";

describe("About", () => {
    it("renders correctly", () => {
        const {container} = render(<Home />)
        expect(container.innerHTML).toMatch("About")
    })
})