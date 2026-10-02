import type { CaseStudyData } from "../../components/case-study/types";

const agileLeadershipInHomeInterior: CaseStudyData = {
  hero: {
    eyebrow: "Personal project case study",
    title: "Coordinating a multi-contractor home project: a delivery case study",
    summary:
      "Applying agile principles to a home interior project run with 5–6 independent specialists, using dependency sequencing, daily check-ins, and practical trade-off decisions.",
    meta: [
      { label: "Context", value: "Home interior delivery" },
      { label: "Team model", value: "5–6 specialist contractors" },
      { label: "Delivery focus", value: "Coordination and alignment" },
      { label: "Timeline", value: "About 3 months (about 1 month over plan)" },
    ],
  },
  sections: [
    {
      kind: "summary",
      items: [
        { label: "Problem", value: "Coordinating 5–6 independent contractors on a home interior project, with no single delivery team and little visibility under the usual hand-over-the-keys model." },
        { label: "Approach", value: "Sequenced work by dependency, checked in on site once or twice a day, and made trade-off decisions as conflicts came up." },
        { label: "Result", value: "Finished in about 3 months against a plan of about 2, around the planned budget, avoiding rework on painting and on ceiling and electrical work, and avoiding a supplier-driven delay." },
      ],
    },
    {
      kind: "intro",
      index: "01",
      eyebrow: "The challenge",
      heading: "Creating visibility and control without a single delivery team",
      lead: "After taking possession of my home, I needed to coordinate furniture, electrical work, lighting, painting, false ceiling, curtains, and related finishing work.",
      paragraphs: [
        { text: "The conventional interior-design model required handing over the keys for several months, with most decisions made up front and limited visibility during execution. I wanted a delivery approach that reduced rework, kept decisions close to the work, and made trade-offs visible as conditions changed. I checked in with the team on site once or twice each day and made decisions when one specialist’s preferred sequence conflicted with another’s needs." },
      ],
      sidebarTitle: "Project objectives",
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
      eyebrow: "Decisions under constraint",
      heading: "Resolving conflicts before they became rework",
      colClass: "col-md-6",
      cards: [
        { title: "Choosing the sequence for light installation", body: "The electrical contractor preferred installing lights after the other work was complete, while the painter said installed fittings would help achieve a better finish. I chose to install the lights earlier, accepting the coordination requirement to protect the quality outcome. Skill shown: decision-making under conflict." },
        { title: "Finding an alternative supplier", body: "Some builder-provided switches and planned fittings were not available from the electrical vendor’s warehouse and were delaying the work. I sourced equivalent items from another city supplier and arranged for the original vendor’s electrician to install them, preserving continuity while reducing the delay risk. Skill shown: risk management and adaptability." },
      ],
    },
    {
      kind: "cardGrid",
      index: "03",
      eyebrow: "The delivery approach",
      heading: "Turning a complex project into a coordinated flow of work",
      cards: [
        { title: "Choosing the right operating model", body: "I compared a single interior designer with directly managed specialists, balancing decision-making control, coordination effort, quality risk, and the opportunity to avoid unnecessary upselling." },
        { title: "Making dependencies visible", body: "After speaking with each contractor, I sequenced the work and identified dependencies, for example completing ceiling and electrical work before final furniture installation. The resulting order of work is shown in the next section." },
        { title: "Creating a feedback rhythm", body: "I stayed engaged throughout execution, checked progress once or twice each day, and gave feedback early so issues could be addressed before they became expensive rework. Skill shown: stakeholder alignment and coordination without authority." },
      ],
    },
    {
      kind: "sequence",
      soft: true,
      index: "04",
      eyebrow: "Making dependencies visible",
      heading: "The order of work, and why",
      intro: "After talking to each specialist, I sequenced the work so that one contractor’s output enabled the next contractor to start. This is the order for the work that depended most on sequencing.",
      steps: [
        { title: "Ceiling and electrical work", note: "Done first, because the later steps depend on finished ceilings and wiring." },
        { title: "Light fittings", note: "Installed before painting, so the painter could finish around the fixtures.", decision: "Decision point: the electrician preferred to install lights last. I chose to install them earlier." },
        { title: "Furniture", note: "Installed after ceiling and electrical work were complete. It was factory-built and assembled on site to keep on-site work short." },
        { title: "Painting", note: "The last activity, done with the fittings already in place to protect the quality of the finish." },
      ],
      caption: "Skill shown: dependency management. Each hand-off was agreed with the contractors involved.",
    },
    {
      kind: "workflow",
      index: "05",
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
      kind: "outcomeReflection",
      soft: true,
      index: "06",
      eyebrow: "Outcome",
      heading: "What the project delivered",
      paragraphs: [
        { text: "The project took about three months, roughly one month longer than planned. With no external deadline, the initial urgency faded and the schedule stretched. Spend stayed around the planned budget, and I reached the quality I wanted rather than settling for readily available alternatives.", mb0: false },
        { text: "Acting early avoided three problems: installing lights before painting let the painter finish around the fittings, completing ceiling and electrical work before furniture avoided rework, and sourcing switches and fittings from another supplier avoided waiting on the original vendor’s warehouse.", mb0: false },
        { text: "I did not track formal metrics, so these are my own account rather than measured figures. A distributed team also creates real constraints, such as vehicle availability, competing site commitments, and specialist capacity, that no plan can remove completely." },
      ],
      sideTitle: "Key takeaway",
      sideBody: "The practical response to uncertainty is not to seek perfect certainty. Make dependencies visible, keep the feedback loop short, communicate early, and keep enough flexibility to adapt without losing sight of the outcome.",
    },
    {
      kind: "retrospective",
      index: "07",
      eyebrow: "Retrospective",
      heading: "What I would keep, change, and try next time",
      columns: [
        {
          title: "Keep",
          items: [
            "Checking in on site once or twice a day, which let me raise issues before they became rework.",
            "Settling sequence conflicts early, as with the light installation, instead of letting them surface mid-work.",
          ],
        },
        {
          title: "Change",
          items: [
            "Set milestones and target dates up front. A flexible timeline removed pressure but also urgency, and the project ran about a month over plan.",
          ],
        },
        {
          title: "Try next time",
          items: [
            "Share one written sequence plan with all contractors at the start, instead of aligning each person separately.",
          ],
        },
      ],
      disclaimer: "This was a personal, non-software project. I use it as an example of transferable delivery behaviors, such as prioritization, dependency management, supplier coordination, risk handling, and feedback, not as evidence of formal Scrum ceremonies or software project delivery.",
    },
  ],
};

export default agileLeadershipInHomeInterior;
