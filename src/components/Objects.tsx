export default function ObjectPractice() {
  const developer: {
    name: string;
    role: string;
    mainSkill: string;
    yearsExperience: number;
    wantsRemote: boolean;
  } = {
    name: "Vlad",
    role: "Frontend Developer",
    mainSkill: "React",
    yearsExperience: 3,
    wantsRemote: true,
  };

  return (
    <ul className="topic">
      <li>Name: {developer.name}</li>
      <li>Role: {developer.role}</li>
      <li>Main skill: {developer.mainSkill}</li>
      <li>Experience: {developer.yearsExperience}</li>
      <li>Wants remote: {developer.wantsRemote ? "Yes" : "No"}</li>
    </ul>
  );
}