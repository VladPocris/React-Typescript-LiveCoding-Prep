import { validateSignupForm } from "./validateSignupForm";
import { describe, it, expect } from "vitest"

describe("validateSignupForm", () => {
    it("returns no errors for valid input", () => {
        const name = "Vlad";
        const email = "test@gmail.com"
        const password = "testing1"
        
        const validateForm = validateSignupForm(name, email, password);

        expect(validateForm).toEqual({});
    });
    it("returns name error if name is blank", () => {
        const name = "";
        const email = "test@gmail.com"
        const password = "testing1"
        
        const validateForm = validateSignupForm(name, email, password);

        expect(validateForm).toEqual({name: "Please specify your name."});
    });
    it("returns name error when name only contains spaces", () => {
        const name = " ";
        const email = "test@gmail.com"
        const password = "testing1"
        
        const validateForm = validateSignupForm(name, email, password);

        expect(validateForm).toEqual({name: "Please specify your name."});
    });

    it("returns email error if email is blank", () => {
        const name = "Vlad";
        const email = ""
        const password = "testing1"
        
        const validateForm = validateSignupForm(name, email, password);

        expect(validateForm).toEqual({email: "Please specify your email."});
    });
    it("returns email error if email contains spaces-only", () => {
        const name = "Vlad";
        const email = " "
        const password = "testing1"
        
        const validateForm = validateSignupForm(name, email, password);

        expect(validateForm).toEqual({email: "Please specify your email."});
    });
    it("returns email symbol error if input doesn't contain the @ symbol", () => {
        const name = "Vlad"
        const email = "test"
        const password = "testing1"

        const validateForm = validateSignupForm(name, email, password);

        expect(validateForm).toEqual({email: "Please include @"})
    });

    it("returns password error if password is less than 8 characters", () => {
        const name = "Vlad"
        const email = "test@gmail.com"
        const password = "testing"

        const validateForm = validateSignupForm(name, email, password);

        expect(validateForm).toEqual({password: "The password must be 8 characters long or more."})
    });
    it("returns no errors if password is exactly 8 characters long", () => {
        const name = "Vlad"
        const email = "test@gmail.com"
        const password = "testing1"

        const validateForm = validateSignupForm(name, email, password);

        expect(validateForm).toEqual({})
    });

    it("returns name and email errors if both inputs are invalid and email does not include @", () => {
        const name = ""
        const email = "testgmail.com"
        const password = "testing1"

        const validateForm = validateSignupForm(name, email, password);

        expect(validateForm).toEqual({name: "Please specify your name.", email: "Please include @"})
    });
    it("returns name and email errors if both inputs are invalid", () => {
        const name = ""
        const email = ""
        const password = "testing1"

        const validateForm = validateSignupForm(name, email, password);

        expect(validateForm).toEqual({name: "Please specify your name.", email: "Please specify your email."})
    });

    it("returns name, email and password errors if all inputs are invalid", () => {
        const name = ""
        const email = ""
        const password = "testing"

        const validateForm = validateSignupForm(name, email, password);

        expect(validateForm).toEqual({name: "Please specify your name.", email: "Please specify your email.", password: "The password must be 8 characters long or more."})
    });
    it("returns name, email and password errors if all inputs are invalid and email does not include @", () => {
        const name = ""
        const email = "testing"
        const password = "testing"

        const validateForm = validateSignupForm(name, email, password);

        expect(validateForm).toEqual({name: "Please specify your name.", email: "Please include @", password: "The password must be 8 characters long or more."})
    })
})
