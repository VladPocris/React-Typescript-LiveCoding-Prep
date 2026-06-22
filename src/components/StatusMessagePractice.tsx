import { useState } from "react"

type Status = "idle" | "loading" | "success" | "error";

export default function StatusMessagePractice() {
    const [status, setStatus] = useState<Status>("idle")

    return (
        <div className="status-container">
            <p className="status-text">Current status: {status}</p>
            <div className="status-message">
                {status === "loading" && <p>Loading...</p>}
                {status === "success" && <p>Operation completed successfully.</p>}
                {status === "error" && <p>Something went wrong.</p>}
                {status === "idle" && <p>Waiting to start.</p>}
            </div>
            <button className="status-btn idle-btn" onClick={() => setStatus("idle")}>Idle</button>
            <button className="status-btn loading-btn" onClick={() => setStatus("loading")}>Loading</button>
            <button className="status-btn success-btn" onClick={() => setStatus("success")}>Success</button>
            <button className="status-btn error-btn" onClick={() => setStatus("error")}>Error</button>
        </div>
    )
}