export default function UnionPractice() {
    type Status = "applied" | "interview" | "rejected";
    type Application = {
        company: string;
        role: string;
        status: Status;
    }
    const applications: Application[] = [
        {
            company: "HelloCompany",
            role: "Frontend",
            status: "applied"
        },
        {
            company: "GoodOne",
            role: "CEO SpaceX",
            status: "interview"
        }
    ]

    return (
        <section className="topic">
            {applications.map((application, index) => {
                return (
                    <div key={application.company} className="application-card">
                        <p>Application nr. {index + 1}</p>
                        <ul>
                            <li>{application.company}</li>
                            <li>{application.role}</li>
                            <li>
                                {
                                    application.status === "applied"
                                        ?   "Waiting for response"
                                        : application.status === "interview"
                                            ? "Prepare interview"
                                            : "Move on"
                                }
                            </li>
                        </ul>
                    </div>
                )
            })}
        </section>
    )
}