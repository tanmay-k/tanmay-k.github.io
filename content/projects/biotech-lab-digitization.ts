import type { CaseStudyData } from "../../components/case-study/types";

const biotechLabDigitization: CaseStudyData = {
  hero: {
    eyebrow: "Project case study",
    title: "Industrial Biotech Laboratory Digitization",
    summary:
      "A development-stage laboratory workflow that digitized experiment recording and focused on dependable observation capture, calculation, validation, and file handling.",
    meta: [
      { label: "Industry", value: "Biotechnology / R&D" },
      { label: "Project type", value: "Digital workflow transformation" },
      { label: "Delivery context", value: "Development, 4–5 people" },
      { label: "My role", value: "Backend engineer, 2–3 months" },
    ],
  },
  sections: [
    {
      kind: "intro",
      index: "01",
      eyebrow: "Overview",
      heading: "Replacing paperwork with a structured digital workflow",
      lead: "The client managed multiple research labs where experimental observations, readings, and outcomes were recorded using the classic combination of paper forms, spreadsheets, and manual follow-up.",
      paragraphs: [
        { text: "This project introduced a central platform to digitize that process. Researchers could enter observations, trace the lifecycle of each sample, and rely on predefined formulas to calculate results automatically. The system was designed to support a wide range of experiment types, from simple observations to more complex workflows with several calculations and validation rules." },
        { text: "The primary users were laboratory analysts performing experiments. My contribution was focused on backend implementation and improvements to observation capture, calculation, submit/reject/resubmit behavior, and file handling." },
      ],
      sidebarTitle: "Project goals",
      sidebarItems: [
        "Standardize experiment recording across labs.",
        "Reduce repeated manual effort and calculation errors.",
        "Support multiple experiment templates without code changes.",
        "Improve review, approval, and rework visibility.",
      ],
    },
    {
      kind: "cardGrid",
      soft: true,
      index: "02",
      eyebrow: "The challenge",
      heading: "Manual lab work was slow, inconsistent, and hard to scale",
      cards: [
        { title: "High process variation", body: "Each experiment had different input requirements, formulas, and review stages, so a one-size-fits-all process was not feasible." },
        { title: "Data quality risk", body: "Manual calculations and handwritten entries created an opportunity for inconsistency, missing values, and rework during review." },
        { title: "Operational overhead", body: "Research teams spent a significant amount of time updating forms, checking results, and coordinating feedback across teams." },
      ],
    },
    {
      kind: "workflow",
      index: "03",
      eyebrow: "Solution",
      heading: "A configurable platform built for scientific workflows",
      intro: "The platform combined structured input collection with flexible rule-based calculation logic. Researchers were guided through experiment-specific forms, while the backend validated the data and automatically calculated outcomes based on predefined formulas.",
      steps: [
        { title: "Experiment-specific form design", body: "The solution used dynamic templates so different studies could be configured without needing a fresh code release for each change." },
        { title: "Observation capture", body: "Users entered readings and observations through a consistent interface designed to reduce data-entry errors and enforce completion checks." },
        { title: "Automated calculation and validation", body: "Predefined formulas and validation rules calculated results in real time and flagged incomplete or inconsistent submissions." },
        { title: "Review, rejection, and redo flow", body: "The system supported submit, reject, and resubmission cycles while maintaining reliable state transitions and safe rollback behavior." },
      ],
    },
    {
      kind: "tech",
      soft: true,
      index: "04",
      eyebrow: "Technologies and practices",
      heading: "Built to balance flexibility with reliability",
      cards: [
        { title: "Dynamic templates", body: "Configurable forms that adapted to experiment-specific requirements." },
        { title: "Calculation engine", body: "Automated outputs driven by predefined formulas and validation rules." },
        { title: "Workflow APIs", body: "Submission, review, rejection, and resubmission flows managed through backend services." },
        { title: "Operational control", body: "Audit-friendly state handling and transaction-aware rollback for safer processing." },
      ],
      tags: ["ASP.NET Core", "REST APIs", "SQL Server", "Excel-based calculations", "Dynamic JSON forms", "Workflow validation", "Git", "System design"],
    },
    {
      kind: "roleOutcomes",
      roleIndex: "05",
      roleHeading: "Owning reliability risks in a configurable workflow",
      roleIntro: "As a backend engineer in a 4–5-person team, I focused on making a development-stage laboratory workflow safer for on-premises deployment and more predictable for analysts performing experiments.",
      roleBullets: [
        { bold: "Anticipated an operational risk:", text: "Recognized that on-premises deployments could share a server with other applications, making disk exhaustion a realistic cause of file-operation failures." },
        { bold: "Designed a failure-safe file workflow:", text: "Added disk-capacity checks before saving, created a recovery copy before changes, and restored the copy when an operation failed." },
        { bold: "Protected data integrity:", text: "Prevented file loss when a database transaction rolled back after a file operation, reducing the risk of inconsistent database and file-system state." },
        { bold: "Investigated calculation defects:", text: "Debugged formulas that behaved differently from Microsoft Excel and identified sensitivity to seemingly harmless quotes and brackets." },
        { bold: "Shared and validated findings:", text: "Documented the calculation behavior, explained the implication to my manager, informed correction of affected formulas, and tested file-handling and calculation edge cases locally." },
        { bold: "Strengthened workflow behavior:", text: "Improved observation capture and submit, reject, and resubmit handling for the analyst workflow." },
      ],
      outcomesIndex: "06",
      outcomesHeading: "A more dependable research process",
      outcomesIntro: "The application was still in development, so I am not claiming production adoption or business KPI improvements. The verified result was safer file handling and stronger coverage of calculation and workflow edge cases during local testing.",
      stats: [
        { value: "No loss", label: "Files protected across database rollback scenarios" },
        { value: "Pre-check", label: "Disk capacity checked before file operations" },
        { value: "Recovery", label: "Safety copy used to recover from failed operations" },
        { value: "Tested", label: "Calculation and workflow edge cases validated locally" },
      ],
    },
    {
      kind: "reflection",
      soft: true,
      index: "07",
      paragraphs: [
        "This project reinforced an important lesson: in domain-heavy systems, the best architecture is not always the most complex one. Sometimes the strongest solution is the one that balances configurability, operational reality, and reliability — especially when a system combines scientific calculations with file operations and stateful workflows. I also learned that compatibility with familiar tools such as Excel must be treated as a deliberate requirement, not assumed from similar-looking formulas.",
        "Project details have been generalized to respect confidentiality obligations. The outcomes shown are limited to development and local-testing results I can substantiate.",
      ],
    },
  ],
};

export default biotechLabDigitization;
