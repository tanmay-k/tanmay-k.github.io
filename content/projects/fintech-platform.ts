import type { CaseStudyData } from "../../components/case-study/types";

const fintechPlatform: CaseStudyData = {
  hero: {
    eyebrow: "Project case study",
    title: "Digital Lending & Invoice Financing Platform",
    summary:
      "A production financial-services platform supporting loan and invoice-financing workflows for small and medium-sized businesses, from application through repayment and closure.",
    meta: [
      { label: "Industry", value: "FinTech and lending" },
      { label: "Project type", value: "Loan management platform" },
      { label: "Delivery context", value: "Production, 7–8 people" },
      { label: "My role", value: "Backend engineer, 5–6 months" },
    ],
  },
  sections: [
    {
      kind: "intro",
      index: "01",
      eyebrow: "Overview",
      heading: "Managing the complete financing lifecycle",
      lead: "The platform supports businesses from their first financing application through credit assessment, approval, disbursement, repayment, and loan closure.",
      paragraphs: [
        { text: "It also supports invoice financing, allowing eligible business invoices to be captured, validated, and used as the basis for obtaining short-term funding. Internal teams can review applications, monitor active loans, manage exceptions, and keep customers informed throughout the process." },
        { text: "The shared backend served customer-facing services used by small business owners and internal teams including Sales and Credit. My contribution focused on backend implementation and production reliability rather than owning business prioritization or customer metrics." },
      ],
      sidebarTitle: "Project goals",
      sidebarItems: [
        "Provide a consistent digital lending journey.",
        "Support invoice-based financing workflows.",
        "Improve visibility into loan and repayment status.",
        "Strengthen operational traceability and reliability.",
      ],
    },
    {
      kind: "cardGrid",
      soft: true,
      index: "02",
      eyebrow: "Key capabilities",
      heading: "One platform for lending operations",
      cards: [
        { title: "Customer and application management", body: "Business registration, customer information, financing requests, terms, and application status are managed in a structured workflow." },
        { title: "Credit and invoice assessment", body: "Customer and business information supports eligibility decisions, while invoice data is validated before financing amounts are calculated." },
        { title: "Loan servicing and collections", body: "Approved loans, disbursements, installments, outstanding balances, overdue payments, and collection actions can be tracked over time." },
      ],
    },
    {
      kind: "workflow",
      index: "03",
      eyebrow: "Financing journey",
      heading: "From customer request to repayment",
      intro: "The application connects customer-facing activity with internal lending operations. Each stage gives the next team the context needed to make decisions and keep the financing record accurate.",
      steps: [
        { title: "Onboarding and application", body: "A business is registered and submits a loan or invoice financing request with the required information, amount, and terms." },
        { title: "Assessment and approval", body: "Customer, business, and invoice information is reviewed to determine eligibility, financing limits, and approval decisions." },
        { title: "Disbursement and servicing", body: "Approved financing is disbursed and tracked through repayment schedules, installments, balances, and status changes." },
        { title: "Collections and closure", body: "Payments and overdue amounts are recorded, collection workflows are supported, and completed financing is closed with a durable history." },
      ],
    },
    {
      kind: "tech",
      soft: true,
      index: "04",
      eyebrow: "Technologies and practices",
      heading: "A maintainable foundation for financial workflows",
      cards: [
        { title: "Java", body: "A strongly typed foundation for implementing business rules and reliable lending workflows." },
        { title: "Spring Boot", body: "Backend services and application components supporting the platform’s core capabilities." },
        { title: "Maven", body: "Build and dependency management for the multi-module application codebase." },
        { title: "Operational controls", body: "Asynchronous logging and audit trails for observable, traceable critical operations." },
      ],
      tags: ["Java", "Spring Boot", "Maven", "REST services", "Async logging", "Audit logging", "Java 21 migration"],
    },
    {
      kind: "roleOutcomes",
      roleIndex: "05",
      roleHeading: "Improving the platform from codebase to runtime",
      roleIntro: "I worked on backend implementation, codebase modernization, and operational reliability for application components supporting the lending lifecycle.",
      roleBullets: [
        "Mapped module dependencies and consolidated 11 fragmented repositories into 5, reducing the need to create and manually coordinate branches across every repository for each development task.",
        "Reduced dependency and version-management complexity that was making Java and Spring Boot upgrades increasingly difficult and increasing exposure to security risk.",
        "Optimized a daily scheduled job that previously took more than an hour and sometimes failed by skipping execution steps when no relevant data had changed.",
        "Implemented audit history for important tables by storing the previous and updated records as JSON together with the identity of the person who made the change.",
      ],
      outcomesIndex: "06",
      outcomesHeading: "A more reliable platform for lending teams",
      outcomesIntro: "The work reduced structural complexity, improved the reliability of a daily production job, and made important data changes easier to trace. These are verified engineering and operational outcomes; business KPIs are not included because they were outside my role and access.",
      stats: [
        { value: "11 → 5", label: "Repositories consolidated" },
        { value: "40%", label: "Daily job execution time reduced" },
        { value: "1 hour+", label: "Previous job duration, with intermittent failures" },
        { value: "JSON history", label: "Previous and updated values retained with actor identity" },
      ],
    },
    {
      kind: "reflection",
      soft: true,
      index: "07",
      paragraphs: [
        "Financial platforms require both domain accuracy and engineering discipline. This project strengthened my experience with lifecycle-driven workflows, legacy modernization, performance optimization, dependency mapping, and traceability for production systems.",
        "Project details have been generalized to respect confidentiality obligations. The outcomes shown are limited to results I can substantiate from my work.",
      ],
    },
  ],
};

export default fintechPlatform;
