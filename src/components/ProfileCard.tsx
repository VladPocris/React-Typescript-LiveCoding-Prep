type ProfileCardProps = {
  name: string;
  role: string;
  mainSkill: string;
  isAvailable: boolean;
};

export default function ProfileCard({
  name,
  role,
  mainSkill,
  isAvailable,
}: ProfileCardProps) {
  return (
    <section className="topic profile-card">
      <h1>{name}</h1>
      <h2>{role}</h2>
      <p>{mainSkill}</p>
      <p>{isAvailable ? "Available" : "Not Available"}</p>
    </section>
  );
}