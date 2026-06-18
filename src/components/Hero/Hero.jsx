export default function Hero() {
  return (
    <div className="hero">
      <h1>Hi, I'm Pavan Bairoju</h1>

      <h3>React UI / Frontend Developer</h3>

      <p>
        Passionate about building responsive, scalable, and user-friendly web
        applications using React and modern JavaScript.
      </p>

      <div className="buttons">
        <a href="#projects">View Projects</a>

        <a href={`${import.meta.env.BASE_URL}resume.pdf`}
         download="Pavan_Bairoju_Resume.pdf"
         target="_blank"
         rel="noopener noreferrer"
         className="btn btn-primary">
          Download Resume
        </a>

        {/* <a href="/resume.pdf" download>
          Download Resume
        </a> */}
      </div>
    </div>
  );
}