import type { CaseStudyData } from "../../components/case-study/types";

const agileLeadershipInHomeInterior: CaseStudyData = {
  hero: {
    eyebrow: "Personal project case study",
    title: "Agile leadership beyond software development",
    summary:
      "How I coordinated a three-month home interior project across 5–6 independent specialists using dependency management, frequent inspection, and practical trade-off decisions.",
    meta: [
      { label: "Context", value: "Home interior delivery" },
      { label: "Team model", value: "5–6 specialist contractors" },
      { label: "Leadership focus", value: "Coordination and alignment" },
      { label: "Timeline", value: "Approximately 3 months" },
    ],
  },
  sections: [
    {
      kind: "intro",
      index: "01",
      eyebrow: "The challenge",
      heading: "Creating visibility and control without a single delivery team",
      lead: "After taking possession of my home, I needed to coordinate furniture, electrical work, lighting, painting, false ceiling, curtains, and related finishing work.",
      paragraphs: [
        { text: "The conventional interior-design model required handing over the keys for several months, with most decisions made up front and limited visibility during execution. I wanted a delivery approach that reduced rework, kept decisions close to the work, and made trade-offs visible as conditions changed. I checked in with the team on site once or twice each day and made decisions when one specialist’s preferred sequence conflicted with another’s needs." },
      ],
      sidebarTitle: "Leadership objectives",
      sidebarItems: [
        "Keep ownership of priorities and quality.",
        "Make work sequencing and dependencies explicit.",
        "Reduce on-site work and avoid preventable rework.",
        "Maintain a regular feedback loop with each contractor.",
      ],
    },
    {
      kind: "cardGrid",
      soft: true,
      index: "02",
      eyebrow: "The leadership approach",
      heading: "Turning a complex project into a coordinated flow of work",
      cards: [
        { title: "Choosing the right operating model", body: "I compared a single interior designer with directly managed specialists, balancing decision-making control, coordination effort, quality risk, and the opportunity to avoid unnecessary upselling." },
        { title: "Making dependencies visible", body: "After speaking with each contractor, I sequenced the work and identified dependencies-for example, completing ceiling and electrical work before final furniture installation." },
        { title: "Creating a feedback rhythm", body: "I stayed engaged throughout execution, checked progress once or twice each day, and gave feedback early so issues could be addressed before they became expensive rework." },
      ],
    },
    {
      kind: "workflow",
      index: "03",
      eyebrow: "Execution flow",
      heading: "Leading through sequencing, inspection, and adaptation",
      intro: "Rather than treating the design as a fixed hand-off, I used a staged approach: prepare the next activity, confirm the current result, and adjust based on what was learned on site.",
      steps: [
        { title: "Define the outcome and constraints", body: "I clarified the desired work, materials, quality expectations, and the rule that furniture should be factory-built wherever possible and assembled on site." },
        { title: "Select and align specialists", body: "I evaluated contractors for specific work, explained the delivery model, and aligned each person on their responsibilities and hand-offs." },
        { title: "Sequence dependent work", body: "I planned the order of activities so one contractor’s output enabled the next contractor to start, reducing clashes and idle time." },
        { title: "Inspect, communicate, and adapt", body: "I used frequent site checks and conversations to surface technical challenges, make trade-offs, and keep the work moving toward the intended result." },
      ],
    },
    {
      kind: "tech",
      soft: true,
      index: "04",
      eyebrow: "Skills demonstrated",
      heading: "Transferable Agile leadership capabilities",
      cards: [
        { title: "Prioritization", body: "Focused effort on the work that unlocked the next activity and protected the desired outcome." },
        { title: "Dependency management", body: "Mapped hand-offs across independent specialists and sequenced work to reduce blockers." },
        { title: "Stakeholder alignment", body: "Set clear expectations, explained constraints, and kept contributors aligned on quality and scope." },
        { title: "Risk management", body: "Anticipated visibility, rework, availability, and technical risks, then designed practical mitigations." },
        { title: "Continuous improvement", body: "Adjusted the plan as new information emerged instead of waiting for a final hand-over to discover problems." },
        { title: "Coordination without authority", body: "Aligned independent specialists through clear expectations, sequencing, and timely decisions rather than formal reporting lines." },
        { title: "Decision-making", body: "Made explicit trade-offs between control, convenience, cost, timing, and quality." },
        { title: "Outcome ownership", body: "Stayed accountable for the integrated result even though delivery was distributed across contractors." },
      ],
    },
    {
      kind: "cardGrid",
      index: "05",
      eyebrow: "Decisions under constraint",
      heading: "Resolving conflicts before they became rework",
      colClass: "col-md-6",
      cards: [
        { title: "Choosing the sequence for light installation", body: "The electrical contractor preferred installing lights after the other work was complete, while the painter said installed fittings would help achieve a better finish. I chose to install the lights earlier, accepting the coordination requirement to protect the quality outcome." },
        { title: "Finding an alternative supplier", body: "Some builder-provided switches and planned fittings were not available from the electrical vendor’s warehouse and were delaying the work. I sourced equivalent items from another city supplier and arranged for the original vendor’s electrician to install them, preserving continuity while reducing the delay risk." },
      ],
    },
    {
      kind: "outcomeReflection",
      index: "06",
      eyebrow: "Outcome and reflection",
      heading: "What I learned about leading through uncertainty",
      paragraphs: [
        { text: "A flexible timeline can remove pressure, but it can also reduce urgency. I learned to establish clearer expectations even when a deadline is not externally imposed. I also learned that a distributed team creates real operational constraints: vehicle availability, competing site commitments, and specialist capacity can all create delays that no plan can remove completely.", mb0: false },
        { text: "The project did not have formal metrics, but it met its practical goals: avoiding unnecessary work and rework, staying around the intended budget, and achieving the desired quality rather than settling for readily available alternatives." },
        { text: "The practical response to uncertainty is not to seek perfect certainty. It is to make dependencies visible, maintain a short feedback cycle, communicate early, and keep enough flexibility to adapt without losing sight of the outcome." },
      ],
      sideTitle: "Key takeaway for Agile teams",
      sideBody: "Leadership is transferable: the environment may change, but the ability to create clarity, align people, manage flow, learn quickly, and own outcomes remains valuable across domains.",
      disclaimer: "This was a personal, non-software project. I use it as an example of transferable delivery behaviors—prioritization, dependency management, supplier coordination, risk handling, and feedback—not as evidence of formal Scrum ceremonies or software project delivery.",
    },
  ],
};

export default agileLeadershipInHomeInterior;
