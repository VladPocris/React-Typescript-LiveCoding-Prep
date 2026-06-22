import { useState } from "react"
import { validateSignupForm, type FormErrors } from "../utils/validateSignupForm"

export default function SignupFormPractice() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errors, setErrors] = useState<FormErrors>({});
    const [success, setSuccess] = useState<boolean>(false);

    function handleNameInput(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
        setSuccess(false);
    }

    function handleEmailInput(e: React.ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value);
        setSuccess(false);
    }

    function handlePasswordInput(e: React.ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value);
        setSuccess(false);
    }

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        const newErrors = validateSignupForm(name, email, password);
        setErrors(newErrors);
        setSuccess(Object.keys(newErrors).length === 0);
    }

    return (
        <section className="topic signup-form">
            <form noValidate onSubmit={handleSubmit} className="signup-form-inner">
                <label htmlFor="signup-name">Name</label>
                <input id="signup-name" type="text" value={name} onChange={handleNameInput} className="form-input" />
                {errors.name && <p className="form-error">{errors.name}</p>}

                <label htmlFor="signup-email">Email</label>
                <input id="signup-email" type="email" value={email} onChange={handleEmailInput} className="form-input" />
                {errors.email && <p className="form-error">{errors.email}</p>}

                <label htmlFor="signup-password">Password</label>
                <input id="signup-password" type="password" value={password} onChange={handlePasswordInput} className="form-input" />
                {errors.password && <p className="form-error">{errors.password}</p>}

                <button type="submit" className="form-button">Submit Form</button>
                {success && <p className="success-message">Form submitted successfully!</p>}
            </form>
        </section>
    )
}