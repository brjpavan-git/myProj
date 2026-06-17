const skills = [
  "React",
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  "Redux",
  "Bootstrap",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "REST APIs",
];

export default function Skills() {
  return (
    <>
      <h2>Skills</h2>

      <div className="grid">
        {skills.map((skill) => (
          <div className="card" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </>
  );
}