import { useState } from "react"

export default function StatePractice() {
    const [name, setName] = useState<string>("Vlad")
    const [experience, setExperience] = useState<number>(3)
    const [isAvailable, setIsAvailable] = useState<boolean>(true)
    const [error, setError] = useState<null | string>(null)

    return (
        <section className="topic state-practice">
            <h1>StatePractice</h1>
            <ul className="info-list">
                <li>{name}</li>
                <li>{experience}</li>
                <li>{isAvailable.toString()}</li>
                {
                    error ? <li className="error-text">{error}</li> : <li>No Error</li>
                }
            </ul>
        </section>
    )
}