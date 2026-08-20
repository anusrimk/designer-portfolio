import type { CaseStudy, WorkBlock, WorkSection } from "./case-study";

export type { WorkBlock, WorkSection };
export type Work = CaseStudy;

export const works: Work[] = [
  {
    slug: "javascript-mumbai",
    num: "01",
    name: "JavaScript Mumbai",
    thumb: "/works/javascript-mumbai/hover.jpg",
    tag: "UI/UX Designer",
    metaLine1: "UI/UX Designer · JavaScript Mumbai",
    metaLine2: "March 2026 — Present",
    intro: [
      {
        type: "p",
        text: "I work across the digital experience of JavaScript Mumbai, leading website design, visual systems, and digital campaigns. My role sits between UX, visual design, and development, ensuring that the experience feels consistent from the first interaction to registration.",
      },
    ],
    sections: [
      {
        heading: "The Problem",
        blocks: [
          {
            type: "p",
            text: "JavaScript Mumbai needed a stronger and more cohesive digital presence that could communicate its events and community while making it easier for users to discover and register for initiatives.",
          },
        ],
      },
      {
        heading: "My Approach",
        blocks: [
          {
            type: "p",
            text: "I started by understanding the different audiences interacting with the platform — attendees, developers, speakers, and the broader community.",
          },
          {
            type: "p",
            text: "I mapped their needs and pain points in FigJam, then translated those insights into information architecture, user flows, and eventually the visual system.",
          },
        ],
      },
      {
        heading: "User Journey",
        blocks: [
          {
            type: "flow",
            steps: ["Persona", "Goals", "Pain Points", "Journey", "Technical Flow", "Interface"],
          },
          {
            type: "images",
            images: [
              "/works/javascript-mumbai/01.jpg",
              "/works/javascript-mumbai/02.jpg",
              "/works/javascript-mumbai/03.jpg",
              "/works/javascript-mumbai/04.jpg",
              "/works/javascript-mumbai/05.jpg",
            ],
          },
        ],
      },
      {
        heading: "Low-Fidelity",
        blocks: [
          {
            type: "p",
            text: "Before opening Figma, I sketch the experience on paper to explore layouts, hierarchy, navigation, and interactions quickly.",
          },
          {
            type: "placeholders",
            items: [
              { label: "Paper sketch", caption: "Early exploration of the website structure." },
              { label: "Low-fi wireframe — coming soon", caption: "Translating rough ideas into a structured user flow." },
            ],
          },
        ],
      },
      {
        heading: "Outcome",
        blocks: [
          {
            type: "p",
            text: "I went on to build the website experience and supporting design system while creating marketing and campaign assets that generated 700+ registrations in a single week.",
          },
        ],
      },
    ],
  },
  {
    slug: "winvesta",
    num: "02",
    name: "Winvesta",
    thumb: "/works/winvesta/hover.jpg",
    tag: "UI/UX Lead",
    metaLine1: "UI/UX Lead · Winvesta",
    metaLine2: "May 2025 — December 2025",
    intro: [
      {
        type: "p",
        text: "At Winvesta, I worked on complex fintech products where UX decisions directly affected whether users could successfully complete financial tasks. I worked across cross-border payments, onboarding, funding, invoicing, investment workflows, and internal product experiences.",
      },
      {
        type: "p",
        text: "I collaborated closely with founders, engineers, growth teams, and international customers, taking features from problem discovery through research, flows, wireframes, UI, and iteration.",
      },
    ],
    sections: [
      {
        heading: "The Problem",
        blocks: [
          {
            type: "p",
            text: "Financial products are naturally complex. Users had to navigate concepts such as international transfers, KYC, funding accounts, invoices, and investment workflows — often without understanding the terminology behind them.",
          },
          {
            type: "quote",
            text: "How do we make a complicated financial process feel simple without hiding important information?",
          },
        ],
      },
      {
        heading: "My Approach",
        blocks: [
          {
            type: "p",
            text: "I started with the problem, not the screen. I used FigJam to break down:",
          },
          {
            type: "list",
            items: [
              "Customer personas",
              "User goals",
              "Pain points",
              "Existing journeys",
              "Desired journeys",
              "Edge cases",
              "Technical constraints",
              "Product dependencies",
            ],
          },
          {
            type: "images",
            images: [
              "/works/winvesta/01.jpg",
              "/works/winvesta/02.jpg",
              "/works/winvesta/03.jpg",
              "/works/winvesta/04.jpg",
              "/works/winvesta/05.jpg",
            ],
          },
        ],
      },
      {
        heading: "Low-Fidelity",
        blocks: [
          {
            type: "p",
            text: "I used paper sketches and low-fidelity wireframes to test the structure before investing time in visual design.",
          },
          {
            type: "placeholders",
            items: [{ label: "Paper sketch — coming soon", caption: "" }],
          },
        ],
      },
      {
        heading: "From Flow to Final UI",
        blocks: [
          {
            type: "p",
            text: "Once the journey was validated, I translated it into high-fidelity interfaces while maintaining consistency with the product's design system.",
          },
          {
            type: "placeholders",
            items: [
              { label: "Before → After", caption: "" },
              { label: "Final UI", caption: "" },
            ],
          },
        ],
      },
      {
        heading: "Impact",
        blocks: [
          {
            type: "list",
            items: [
              "Designed 15+ product features",
              "Worked on $1.2M+ transaction volume",
              "Contributed to a 15%+ increase in onboardings",
              "Worked across cross-border payments, Custom Invoicing, Funding Wallets, onboarding, website redesign, and investment experiences",
              "Designed Winnit, a collaborative AI workspace with multi-model support",
            ],
          },
          {
            type: "p",
            text: "This experience taught me how to design for complexity, trust, compliance, and real financial consequences — while still keeping the experience human.",
          },
        ],
      },
    ],
  },
  {
    slug: "itm-business-school",
    num: "03",
    name: "ITM Business School",
    tag: "UX & Technology Trainer",
    metaLine1: "UX & Technology Trainer · ITM Business School",
    metaLine2: "January 2025 — February 2025",
    intro: [
      {
        type: "p",
        text: "I trained 70+ MBA students in UI/UX, data science, Git/GitHub, version control, scalable storage, command-line workflows, and no-code tools.",
      },
      {
        type: "p",
        text: "Rather than teaching UX as simply “making screens look good,” I focused on helping students understand the thinking behind a product.",
      },
    ],
    sections: [
      {
        heading: "The Problem",
        blocks: [
          {
            type: "p",
            text: "Many students understood business problems but had limited exposure to the process of turning those problems into usable digital products.",
          },
        ],
      },
      {
        heading: "Experience",
        blocks: [
          {
            type: "p",
            text: "Beyond teaching individual tools, I helped students understand how design, technology, and business decisions connect.",
          },
          {
            type: "p",
            text: "It also strengthened my own ability to communicate complex technical and design concepts in a simple, accessible way.",
          },
        ],
      },
    ],
  },
  {
    slug: "letsupgrade",
    num: "04",
    name: "LetsUpgrade",
    thumb: "/works/letsupgrade/hover.jpg",
    tag: "UX & Product Intern",
    metaLine1: "UX & Product Intern · LetsUpgrade.in",
    metaLine2: "December 2024",
    intro: [
      {
        type: "p",
        text: "At LetsUpgrade, I worked on 12thClass.com, focusing on user experience, research, content flow, and engagement for a platform serving 1M+ users.",
      },
    ],
    sections: [
      {
        heading: "The Problem",
        blocks: [
          {
            type: "p",
            text: "With a large student audience, the challenge wasn't simply attracting users — it was helping them find the right information quickly and continue through the experience without unnecessary friction.",
          },
        ],
      },
      {
        heading: "My Approach",
        blocks: [
          {
            type: "p",
            text: "I combined qualitative UX thinking with Google Analytics data to understand where users were engaging and where they were dropping off. I looked at:",
          },
          {
            type: "list",
            items: [
              "User behaviour",
              "Navigation",
              "Content hierarchy",
              "Engagement gaps",
              "Drop-off points",
              "Accessibility",
              "Conversion opportunities",
            ],
          },
        ],
      },
      {
        heading: "Low-Fidelity",
        blocks: [
          {
            type: "placeholders",
            items: [
              { label: "Low-fi wireframe — coming soon", caption: "Testing information hierarchy before visual design." },
            ],
          },
        ],
      },
      {
        heading: "Outcome",
        blocks: [
          {
            type: "p",
            text: "I collaborated with development and marketing teams to improve navigation, content flow, accessibility, and overall usability, while ensuring that UX decisions remained aligned with business and engagement goals.",
          },
        ],
      },
    ],
  },
];

export function getWork(slug: string): Work | undefined {
  return works.find((w) => w.slug === slug);
}
