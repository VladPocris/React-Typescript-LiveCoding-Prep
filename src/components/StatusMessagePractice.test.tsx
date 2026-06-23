import StatusMessagePractice from "./StatusMessagePractice.tsx"

import { describe, it, expect } from "vitest"
import userEvent from "@testing-library/user-event"
import { render, screen } from "@testing-library/react"

function setup() {
    render(<StatusMessagePractice />);
    const idleBtn = screen.getByRole("button", { name: "Idle" });
    const loadingBtn = screen.getByRole("button", { name: "Loading" });
    const successBtn = screen.getByRole("button", { name: "Success" });
    const errorBtn = screen.getByRole("button", { name: "Error" });
    const user = userEvent.setup();
    return { idleBtn, loadingBtn, successBtn, errorBtn, user };
}

describe("status message testing", () => {
    it("renders initial idle message", () => {
        setup();

        expect(screen.getByText("Waiting to start.")).toBeInTheDocument();
    });
    it("clicking Loading shows loading message", async () => {
        const { user, loadingBtn } = setup();
        await user.click(loadingBtn);
        
        expect(screen.getByText("Loading...")).toBeInTheDocument();
    });
    it("clicking Success shows success message", async () => {
        const { user, successBtn } = setup();
        await user.click(successBtn);
        
        expect(screen.getByText("Operation completed successfully.")).toBeInTheDocument();
    });
    it("clicking Error shows error message", async () => {
        const { user, errorBtn } = setup();
        await user.click(errorBtn);

        expect(screen.getByText("Something went wrong.")).toBeInTheDocument();
    });
    it("clicking Idle brings it back to idle", async () => {
        const { user, idleBtn, loadingBtn } = setup();
        await user.click(loadingBtn);
        await user.click(idleBtn);

        expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
        expect(screen.getByText("Waiting to start.")).toBeInTheDocument();
    });
})