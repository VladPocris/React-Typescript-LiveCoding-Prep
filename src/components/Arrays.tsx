export default function Arrays() {
    const skills: string[] = ["JavaScript", "TypeScript", "React"];
    const projectNames: string[] = ["Project A", "Project B", "Project C"];
    const scores: number[] = [85, 90, 95];
    const hasExperience: boolean[] = [true, true, false];
    const arrays: (string[] | number[] | boolean[])[] = [skills, projectNames, scores, hasExperience]

    return (
        <>
            {
                arrays.map((value, index) => {
                    let liEl: JSX.Element[] = [];

                    value.forEach((item, index) => {
                        if (typeof item !== "boolean") {
                            liEl.push(<li key={index}>{item}</li>)
                        } else {
                            liEl.push(<li key={index}>{item.toString()}</li>)
                        }
                    })

                    return (<ul key={index}>{liEl}</ul>)
                })

            }
        </>
    );
}