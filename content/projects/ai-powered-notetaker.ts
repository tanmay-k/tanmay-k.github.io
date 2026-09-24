import type { CaseStudyData } from "../../components/case-study/types";

const aiPoweredNotetaker: CaseStudyData = {
  hero: {
    eyebrow: "Project case study",
    title: "AI Meeting Notetaker & Talent Performance Platform",
    summary:
      "A pilot collaboration platform that exposed meeting-notetaker capabilities through REST APIs, with an administration panel, tenant hierarchy, and an asynchronous meeting lifecycle.",
    meta: [
      { label: "Industry", value: "AI and talent management" },
      { label: "Project type", value: "Collaboration platform" },
      { label: "Delivery context", value: "MVP, 8–12 people" },
      { label: "My role", value: "Backend API owner and technical requirements partner" },
    ],
  },
  sections: [
    {
      kind: "intro",
      index: "01",
      eyebrow: "Overview",
      heading: "Turning conversations into useful team knowledge",
      lead: "The platform helps small and medium-sized teams manage talent performance and capture the value of their online meetings.",
      paragraphs: [
        { text: "Its automated meeting notetaker joins scheduled meetings, records the conversation, generates a transcript, and uses an AI model to produce a concise summary. The backend coordinates scheduling, meeting state, generated artifacts, and access to completed meeting content." },
        { text: "The MVP supported one meeting platform. An administration panel served administrators, while resellers and tenants used the backend through API-only access secured by API keys. I clarified backend requirements, shaped the API contract, and worked with bot development, frontend, QA, and DevOps teams." },
      ],
      sidebarTitle: "Project goals",
      sidebarItems: [
        "Make automated meeting capture easy to schedule.",
        "Track each meeting through its processing lifecycle.",
        "Give users reliable access to transcripts and summaries.",
        "Connect the frontend, notetaker, and AI services consistently.",
      ],
    },
    {
      kind: "cardGrid",
      soft: true,
      index: "02",
      eyebrow: "Key capabilities",
      heading: "A reliable backend for AI-assisted meetings",
      cards: [
        { title: "Meeting scheduling", body: "Users can schedule a notetaker session to automatically join an online meeting at a specified time." },
        { title: "Lifecycle visibility", body: "Meetings can be retrieved and managed by lifecycle status, including scheduled, in-progress, and completed states." },
        { title: "Transcript access", body: "After processing is complete, users can access and download the generated meeting transcript." },
      ],
    },
    {
      kind: "workflow",
      index: "03",
      eyebrow: "Meeting lifecycle",
      heading: "From scheduled session to completed summary",
      intro: "The application keeps meeting state and generated artifacts aligned as a session moves from a user request through recording and AI processing to a completed meeting.",
      steps: [
        { title: "Schedule meeting", body: "A user creates a notetaker session with the online meeting details and the time when the notetaker should join." },
        { title: "Notetaker joins", body: "At the scheduled time, the notetaker joins the online meeting and the application tracks the session as in progress." },
        { title: "Recording and AI processing", body: "The conversation is recorded, transcribed, and processed by an AI model to produce a concise meeting summary." },
        { title: "Transcript and summary generated", body: "The completed meeting exposes its generated artifacts so users can review or download the transcript." },
      ],
    },
    {
      kind: "tech",
      soft: true,
      index: "04",
      eyebrow: "Technologies and practices",
      heading: "Clear APIs around a stateful AI workflow",
      cards: [
        { title: ".NET 8", body: "Backend services and REST APIs for meeting scheduling, retrieval, and artifact access." },
        { title: "Entity Framework Core", body: "Data-access functionality for meeting, scheduling, lifecycle, and transcript-related data." },
        { title: "REST APIs", body: "A consistent interface between the frontend, meeting-notetaker service, and backend systems." },
        { title: "Business rules", body: "Validation and lifecycle rules help keep scheduled meetings and generated artifacts consistent." },
      ],
      tags: [".NET 8", "Entity Framework Core", "LINQ", "REST APIs", "AI processing workflow", "Meeting lifecycle management", "Request validation"],
    },
    {
      kind: "roleOutcomes",
      roleIndex: "05",
      roleHeading: "Building the API layer behind the experience",
      roleIntro: "I owned backend API implementation and requirements clarification for the MVP, translating ambiguous workflow needs into a stable integration contract for the bot, frontend, QA, DevOps, and future third-party consumers.",
      roleBullets: [
        "Designed the Admin, Reseller, and Tenant hierarchy and implemented API-key authentication for API-only reseller and tenant access.",
        "Designed and implemented approximately 20–22 .NET 8 REST APIs for scheduling, retrieving, and managing notetaker sessions through lifecycle states.",
        "Implemented and deployed an Azure Function integrated with Service Bus for part of the asynchronous meeting lifecycle.",
        "Integrated Azure Key Vault and Blob Storage, using signed URLs to provide secure direct access to generated meeting artifacts.",
        "Evaluated .NET unit-testing libraries and demonstrated that xUnit with Coverlet could meet the client’s minimum 70% coverage target; the approach achieved 84% coverage and was adopted by the frontend team.",
        "Worked with the bot development team to improve the notetaker’s ability to join the correct meeting, increasing the success rate to more than 90%.",
        "Created a portable shell script with AI assistance for scaling and performance test setup, reducing manual QA effort and increasing QA productivity by 50%.",
        "Partnered with QA on user-manual documentation by explaining system and API behavior and reviewing content for technical accuracy.",
      ],
      outcomesIndex: "06",
      outcomesHeading: "A dependable path from meeting to insight",
      outcomesIntro: "The work established a testable, secure backend contract for a cross-functional MVP. The outcomes below focus on delivery quality, integration readiness, workflow reliability, and practices I directly influenced; confidential usage volumes and business adoption are not claimed.",
      stats: [
        { value: "84%", label: "Unit-test coverage reported by Coverlet" },
        { value: "20–22", label: "REST APIs implemented for the MVP" },
        { value: "90%+", label: "Correct-meeting join success rate" },
        { value: "50%", label: "QA productivity improvement from test automation" },
        { value: "70%+", label: "Client coverage target established and exceeded" },
        { value: "3 levels", label: "Admin, Reseller, and Tenant hierarchy" },
        { value: "2 environments", label: "MVP deployed to development and testing" },
      ],
    },
    {
      kind: "reflection",
      soft: true,
      index: "07",
      paragraphs: [
        "Working on the backend of the AI-Powered Notetaker strengthened my ability to turn ambiguous product needs into clear API contracts, ownership boundaries, and delivery practices that multiple teams could use. Coordinating asynchronous meeting events and working with the bot team showed me how technical alignment can improve reliability, while the xUnit and Coverlet evaluation created a quality standard adopted beyond my immediate backend work. Automating repeatable QA setup also reinforced that technical leadership includes removing friction for partner teams, not only implementing features. The project gave me practical Azure experience while requiring me to learn and apply unfamiliar services quickly.",
        "Project details have been generalized to respect confidentiality obligations. The outcomes shown are limited to results I can substantiate from this MVP work.",
      ],
    },
  ],
};

export default aiPoweredNotetaker;
