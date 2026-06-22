export default function Primitives() {
    let name: string = "Vlad";
    let experience: number = 3;
    let isRemotePreferred: boolean = true;
    let frontFramework: string = "React";
    let expectedSalaryUsd: number = 100000;

    return (
        <ul className="topic">
            <li>
                Name: {name}
            </li>
            <li>
                Experience: {experience}
            </li>
            <li>
                Remote Preffered: {isRemotePreferred ? "Yes" : "No"}
            </li>
            <li>
                Frontend Framework: {frontFramework}
            </li>
            <li>
                Expected Salary: ${expectedSalaryUsd}
            </li>
        </ul>
    )
}