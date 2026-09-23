import Link from "next/link";

const projects = [
  { title: "AI Meeting Notetaker and Talent Performance Platform", category: "AI and talent workflows", summary: "A platform for meeting intelligence, structured feedback, and talent performance workflows.", slug: "ai-powered-notetaker" },
  { title: "Third-Party Agent Onboarding Platform", category: "Workflow modernization", summary: "A workflow platform that improved visibility and consistency across third-party onboarding.", slug: "agent-onboarding" },
  { title: "Biotech Lab Digitization", category: "Biotechnology and workflow modernization", summary: "Digitizing manual experiment recording to reduce operational friction and improve data reuse.", slug: "biotech-lab-digitization" },
  { title: "Fintech Lending and Invoice Financing Platform", category: "FinTech and lending workflows", summary: "A production platform supporting financing applications, repayment, and operational traceability.", slug: "fintech-platform" },
];

export default function HomePage() {
  return (
    <main>
      <header className="hero">
        <div className="container">
          <h1>Tanmay Kulkarni</h1>
          <p className="hero-summary">Senior Software Engineer | Technical leadership, cross-functional delivery, and team enablement</p>
          <p className="hero-summary">I help teams turn ambiguous business problems into reliable products by aligning stakeholders, clarifying requirements, managing dependencies, and enabling engineers to deliver effectively.</p>
          <a href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/assets/tanmay-kulkarni-resume.docx`} download>Download Resume</a>
        </div>
      </header>
      <section id="about" className="section"><div className="container"><h2>About Me</h2><p>I’m a senior software engineer with around six years of experience building backend systems and workflow-driven products across financial services, AI, biotechnology, and lending.</p><p className="muted">My work has expanded beyond implementation into clarifying ambiguous requirements, aligning stakeholders, managing delivery dependencies, and helping teams make sound technical decisions.</p></div></section>
      <section id="experience" className="section"><div className="container"><h2>Experience</h2><div className="grid"><article className="card"><h3>Senior Software Engineer</h3><p className="muted">August 2023 – February 2026 · SpringCT</p><p>Backend development, technical ownership, stakeholder coordination, and mentoring engineers.</p></article><article className="card"><h3>Software Engineer</h3><p className="muted">July 2020 – August 2023 · SpringCT</p><p>Backend development, stakeholder engagement, and production support.</p></article></div></div></section>
      <section id="projects" className="section"><div className="container"><h2>Selected Projects</h2><div className="project-list">{projects.map((project, index) => <article className="project-item" key={project.slug}><div className="project-index">{String(index + 1).padStart(2, "0")}</div><div><h3>{project.title}</h3><p className="muted">{project.category}</p><p>{project.summary}</p></div><Link href={`/projects/${project.slug}`}>View project →</Link></article>)}</div></div></section>
      <section id="skills" className="section"><div className="container"><h2>Technology Proficiency</h2><p><span className="badge">Java</span><span className="badge">Spring Boot</span><span className="badge">C#</span><span className="badge">.NET 8</span><span className="badge">MySQL</span><span className="badge">SQL Server</span><span className="badge">AWS DynamoDB</span><span className="badge">Git</span></p></div></section>
      <section id="contact" className="section"><div className="container"><h2>Contact</h2><p>Email: <a href="mailto:tanmaypkulkarni@gmail.com">tanmaypkulkarni@gmail.com</a></p><p>LinkedIn: <a href="https://www.linkedin.com/in/tanmay-kulkarni-sse">tanmay-kulkarni-sse</a></p><p>GitHub: <a href="https://github.com/tanmay-k">tanmay-k</a></p><p><a href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/assets/GooglePMCertificate_TanmayKulkarni.pdf`}>Google Project Management Certificate</a></p></div></section>
    </main>
  );
}
