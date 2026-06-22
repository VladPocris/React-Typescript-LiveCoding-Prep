import { useState } from "react"

export default function FormPractice() {
    const [ name, setName ] = useState<string>("Vlad")
    const [ submittedName, setSubmittedName ] = useState<string | null>(null)

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
    }

    function handleFormSubmission(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        setSubmittedName(name);
    }

    return (
        <section className="topic form-practice">
            <form onSubmit={handleFormSubmission} className="practice-form">
                <label htmlFor="name-input">Name</label>
                <input
                    id="name-input"
                    type="text"
                    value={name}
                    onChange={handleInputChange}
                    className="form-input"
                />
                {/* error message for demo */}
                <p className="form-error" aria-live="polite"></p>
                <button type="submit" className="form-button">Submit</button>
            </form>
            {submittedName && <h2 className="submitted-name">{submittedName}</h2>}
        </section>
    )
}