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
        text: "I design everything a JavaScript Mumbai member touches online: the website, the visual system, and the campaigns that get people through the door. One of those campaigns brought in 700+ registrations in a single week.",
      },
    ],
    sections: [
      {
        heading: "The Problem",
        blocks: [
          {
            type: "p",
            text: "JavaScript Mumbai's online presence didn't hang together, and finding an event and signing up for it took more effort than it should have. The site needed to show what the community is about and get people registered without friction.",
          },
        ],
      },
      {
        heading: "My Approach",
        blocks: [
          {
            type: "p",
            text: "I started with who actually uses the site: attendees, developers, speakers, and the wider community.",
          },
          {
            type: "p",
            text: "I mapped what each of them needed in FigJam, then turned that into the information architecture, the user flows, and finally the visual system.",
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
            text: "Before opening Figma, I sketch on paper. It's the fastest way to try out layouts, hierarchy, navigation, and interactions before committing to any of them.",
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
            text: "I built the website and its design system, and designed the campaign assets behind 700+ registrations in a single week.",
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
        text: "At Winvesta, I designed fintech products where one confusing screen could stop someone from sending money abroad or getting an invoice paid. I worked across cross-border payments, onboarding, funding, invoicing, investments, and internal tools.",
      },
      {
        type: "p",
        text: "I worked closely with the founders, engineers, growth team, and international customers, taking features from discovery through research, flows, wireframes, UI, and iteration.",
      },
    ],
    sections: [
      {
        heading: "The Problem",
        blocks: [
          {
            type: "p",
            text: "Financial products are complex by nature. Users had to deal with international transfers, KYC, funding accounts, invoices, and investments, often without knowing what the terms meant.",
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
            text: "Once the journey held up, I turned it into high-fidelity screens built on the product's existing design system.",
          },
          {
            type: "images",
            images: [
              "/works/winvesta/final-01.jpg",
              "/works/winvesta/final-02.jpg",
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
              // TODO(copy): name what you designed and when, e.g.
              //   "Designed the [payments / funding] flows that have processed $1.2M+ in transactions"
              //   "Redesigned [onboarding step], contributing to a 15%+ rise in onboardings over [period]"
              // Also confirm Winvesta is OK with these figures being public.
              "Designed across products handling $1.2M+ in transaction volume",
              "Contributed to a 15%+ increase in onboardings",
              "Worked across cross-border payments, Custom Invoicing, Funding Wallets, onboarding, website redesign, and investment experiences",
              "Designed Winnit, a collaborative AI workspace with multi-model support",
            ],
          },
          {
            type: "p",
            text: "This is where I learned to design for complexity, trust, compliance, and real money, without losing the human side of the experience.",
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
        text: "At LetsUpgrade, I worked on 12thClass.com, a platform for students with 1M+ users, focusing on UX research, content flow, and engagement.",
      },
    ],
    sections: [
      {
        heading: "The Problem",
        blocks: [
          {
            type: "p",
            text: "With that many students, getting people in wasn't the hard part. Helping them find the right information fast, and keep going without friction, was.",
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
