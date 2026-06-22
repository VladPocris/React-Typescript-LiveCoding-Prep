export type FormErrors = {
    name?: string;
    email?: string;
    password?: string;
}

export function validateSignupForm(name: string, email: string, password: string): FormErrors {
    const newErrors: FormErrors = {};
    if (name.trim().length === 0) newErrors.name = "Please specify your name.";
    if (email.trim().length === 0) {
        newErrors.email = "Please specify your email.";
    } else if (!email.includes("@")) {
        newErrors.email = "Please include @";
    }
    if (password.length < 8) newErrors.password = "The password must be 8 characters long or more."
    return newErrors;
}