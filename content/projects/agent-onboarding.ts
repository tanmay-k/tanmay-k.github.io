import type { CaseStudyData } from "../../components/case-study/types";

const agentOnboarding: CaseStudyData = {
  hero: {
    eyebrow: "Project case study",
    title: "Third-Party Agent Onboarding Platform",
    summary:
      "A digital onboarding product that helps a financial services provider manage state-specific documents, reviews, and sign-offs for prospective third-party agents.",
    metaColClass: "col-6 col-md",
    meta: [
      { label: "Industry", value: "Financial services" },
      { label: "Project type", value: "Enterprise web platform" },
      { label: "Project context", value: "Enterprise onboarding product, 2+ years in production" },
      { label: "Scale", value: "Approximately 1,000+ agents onboarded" },
      { label: "My role", value: "Full-stack engineer, technical owner, and requirements partner" },
    ],
  },
  sections: [
    {
      kind: "intro",
      index: "01",
      eyebrow: "Overview",
      heading: "Making a complex process easier to complete",
      lead: "The client provides money transfer, check cashing, and bill payment services through its own branches and a network of independent agents.",
      paragraphs: [
        { text: "Before this platform, onboarding an agent required several disconnected manual steps: collecting business and owner information, gathering signed documents, initiating background checks, and coordinating multiple reviews. The project brought those steps into one guided workflow, giving applicants and internal teams a clearer path from application to approval.", mb0: false },
        { text: "I contributed across backend and frontend implementation, requirements clarification, technical decision-making, and production delivery. I helped lead discussions with client stakeholders, coordinated implementation and validation with QA, and supported junior engineers through design and delivery decisions. The delivery group started at approximately 12–14 people and later became a focused group of around 3–4 people, including the client." },
      ],
      sidebarTitle: "Project goals",
      sidebarItems: [
        "Reduce manual coordination and avoid duplicate data entry.",
        "Make application status visible to the right teams.",
        "Support consistent compliance and review practices.",
        "Give agents a more straightforward onboarding experience.",
      ],
    },
    {
      kind: "cardGrid",
      soft: true,
      index: "02",
      eyebrow: "The challenge",
      heading: "Replacing handoffs with a connected workflow",
      cards: [
        { title: "Many stakeholders", body: "Applicants, operations teams, compliance reviewers, and decision-makers all needed the right information at different points in the process." },
        { title: "Sensitive information", body: "Business, ownership, identity, and background-check information had to be collected carefully and handled with appropriate controls." },
        { title: "Variable review paths", body: "Applications could require different checks and approvals, so the workflow needed to be structured without becoming rigid." },
      ],
    },
    {
      kind: "workflow",
      index: "03",
      eyebrow: "Solution",
      heading: "A guided journey from application to decision",
      intro: "The platform organizes onboarding into clear stages. Each stage captures the information needed for the next decision and keeps progress available to the teams responsible for moving the application forward.",
      steps: [
        { title: "Application and profile creation", body: "The agent submits business details, ownership information, and supporting documents through a structured experience." },
        { title: "Validation and due diligence", body: "Required information is checked and background or compliance reviews are initiated as part of the application flow." },
        { title: "Review and approvals", body: "Internal teams can review a complete application, request follow-up information, and record decisions in a consistent way." },
        { title: "Onboarding completion", body: "Approved agents move forward with a clear status and a reliable record of the completed onboarding journey." },
      ],
    },
    {
      kind: "tech",
      soft: true,
      index: "04",
      eyebrow: "Technologies and practices",
      heading: "The building blocks behind the platform",
      cards: [
        { title: "Web application", body: "Responsive forms and role-based views for applicants and internal users." },
        { title: "REST APIs", body: "Service integrations for validation, workflow actions, and status updates." },
        { title: "Data persistence", body: "Structured storage for applications, documents, reviews, and audit history." },
        { title: "Delivery practices", body: "Version control, code reviews, automated checks, and iterative delivery." },
      ],
      tags: [
        "JavaScript",
        "REST APIs",
        "Relational data",
        "Document workflows",
        "Role-based access",
        "Git",
        "Java",
        "Spring Boot",
        "MySQL",
        "AWS S3",
        "AWS DynamoDB",
        "Camunda BPMN",
      ],
    },
    {
      kind: "roleOutcomes",
      roleIndex: "05",
      roleHeading: "Engineering across the workflow",
      roleIntro: "I operated across the product lifecycle, turning ambiguous client needs into technical solutions, influencing design decisions, coordinating with QA and client stakeholders, and carrying features from proof of concept through production delivery.",
      roleBullets: [
        "Built backend and frontend functionality for a document-heavy onboarding workflow used by marketing, operations, and compliance reviewers.",
        "Led requirements and design discussions with client stakeholders, translating operational and compliance needs into implementable technical decisions.",
        "Created a proof of concept that consolidated multiple API interactions into one REST API call for filling and rendering a US government sign-off form.",
        "Improved the tablet experience for less technical users by removing the need to remember where a document was stored before completing the form.",
        "Presented the proof of concept to the client, secured buy-in, and delivered the capability to production without reported production issues.",
        "Designed and implemented document versioning for common and state-specific documents across the US states and territories supported by the client, while preserving previously signed records.",
        "Coordinated implementation and validation with QA and helped junior teammates make progress through technical guidance and design support.",
      ],
      outcomesIndex: "06",
      outcomesHeading: "A stronger foundation for agent growth",
      outcomesIntro: "The platform supported the onboarding of approximately 1,000+ agents during over two years in production. It replaced fragmented handoffs with a more transparent and repeatable journey, while improving usability for field users and preserving the document history required by compliance workflows. The outcomes below focus on results I can substantiate without disclosing confidential business KPIs.",
      stats: [
        { value: "~1,000+ agents", label: "Approximate number of agents onboarded during more than two years in production" },
        { value: "1 REST API call", label: "Multiple API interactions consolidated for government-form completion and rendering" },
        { value: "Lower friction", label: "Tablet users no longer needed to remember where files were stored" },
        { value: "Historical records", label: "Previously signed documents remained preserved when new versions were added" },
      ],
    },
    {
      kind: "reflection",
      soft: true,
      index: "07",
      paragraphs: [
        "Workflow products succeed when they make the next action obvious and preserve the history needed for trust and compliance. This project strengthened my ability to lead through influence: clarifying ambiguous requirements, making pragmatic technical decisions, aligning client and delivery stakeholders, and helping teammates move from uncertainty to implementation. It also showed me how important it is to design for users with different levels of technical comfort.",
        "Project details have been generalized to respect confidentiality obligations. The outcomes shown are limited to results I can substantiate from my work.",
      ],
    },
  ],
};

export default agentOnboarding;
