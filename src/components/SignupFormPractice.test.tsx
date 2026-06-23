import SignupFormPractice from "./SignupFormPractice";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";

describe("SignupFormPractice", () => {
    it("renders all form fields and the submit button", () => {
        render(<SignupFormPractice />);
        expect(screen.getByLabelText("Name")).toBeInTheDocument();
        expect(screen.getByLabelText("Email")).toBeInTheDocument();
        expect(screen.getByLabelText("Password")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "Submit Form" })).toBeInTheDocument()
    });
    it("empty submit shows validation errors", async () => {
        render(<SignupFormPractice />);
        const submitBtn = screen.getByRole("button", {name: "Submit Form"});
        const user = userEvent.setup()

        await user.click(submitBtn);

        expect(screen.getByText("Please specify your name.")).toBeInTheDocument();
        expect(screen.getByText("Please specify your email.")).toBeInTheDocument();
        expect(screen.getByText("The password must be 8 characters long or more.")).toBeInTheDocument();
    });
    it("shows validation errors for invalid email", async () => {
        render(<SignupFormPractice />);
        const submitBtn = screen.getByRole("button", {name: "Submit Form"});
        const user = userEvent.setup()

        await user.type(screen.getByLabelText("Name"), "Tom");
        await user.type(screen.getByLabelText("Email"), "Tomtest.com");
        await user.type(screen.getByLabelText("Password"), "testing1")
        await user.click(submitBtn);

        expect(screen.getByText("Please include @")).toBeInTheDocument();
    });
    it("shows validation errors for short password", async () => {
        render(<SignupFormPractice />);
        const submitBtn = screen.getByRole("button", {name: "Submit Form"});
        const user = userEvent.setup()

        await user.type(screen.getByLabelText("Name"), "Tom");
        await user.type(screen.getByLabelText("Email"), "Tom@test.com");
        await user.type(screen.getByLabelText("Password"), "test");
        await user.click(submitBtn);

        expect(screen.getByText("The password must be 8 characters long or more.")).toBeInTheDocument();
    });
    it("submits successfully with valid inputs", async () => {
        render(<SignupFormPractice />);
        const nameInput = screen.getByLabelText("Name");
        const emailInput = screen.getByLabelText("Email");
        const passwordInput = screen.getByLabelText("Password");
        const submitBtn = screen.getByRole("button", {name: "Submit Form"});
        const user = userEvent.setup();

        await user.type(nameInput, "Tom");
        await user.type(emailInput, "Tom@test.com");
        await user.type(passwordInput, "testing1")
        await user.click(submitBtn);

        expect(screen.getByText("Form submitted successfully!")).toBeInTheDocument();
    });
    it("success message disappears when user edits an input after successful submit", async () => {
        render(<SignupFormPractice />);
        const nameInput = screen.getByLabelText("Name");
        const emailInput = screen.getByLabelText("Email");
        const passwordInput = screen.getByLabelText("Password");
        const submitBtn = screen.getByRole("button", {name: "Submit Form"});
        const user = userEvent.setup();

        await user.type(nameInput, "Tom");
        await user.type(emailInput, "Tom@test.com");
        await user.type(passwordInput, "testing1")
        await user.click(submitBtn);

        await user.type(nameInput, "x");
        expect(screen.queryByText("Form submitted successfully!")).not.toBeInTheDocument()
    });
});