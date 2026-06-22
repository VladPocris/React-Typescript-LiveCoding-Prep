import { useState } from "react"

export default function InputPractice() {
    const [ name, setName ] = useState<string>("Vlad")

    return (
        <div className="topic input-practice">
            <h1>Hello, {name}</h1>
            <input
                type="text"
                className="topic-input"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            />
        </div>
    )
}