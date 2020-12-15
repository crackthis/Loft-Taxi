import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

jest.mock("./pages/AuthComponent/AuthComponent", () =>({ AuthComponent: () => <div>Home component</div> }))
jest.mock("./pages/Map/Map", () =>({ Map: () => <div>About component</div> }))
jest.mock("./pages/Profile/Profile", () =>({ Profile: () => <div>Profile component</div> }))

describe("App", () => {
    it("renders correctly", () => {
        const {container} = render(<App />)
        expect(container.innerHTML).toMatch("Map component")
    })

    describe("when clicked on navigation buttons", () => {
        it("opens the corresponding page", () => {
            const { getByText, container } = render(<App />)

            fireEvent.click(getByText("Map"))
            expect(container.innerHTML).toMatch("Map component")
            fireEvent.click(getByText("Profile"))
            expect(container.innerHTML).toMatch("Profile component")
        })
    })
})