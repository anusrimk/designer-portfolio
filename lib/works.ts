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
          // TODO(copy): add an "images" block once the sketch and low-fi
          // wireframe are ready (captions: "Early exploration of the website
          // structure." / "Turning rough ideas into a structured user flow.")
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
            text: "I started with the problem, not the screen. In FigJam, I mapped who the customers were, what they were trying to do, where the existing journeys broke down, and what a better journey looked like, along with the edge cases, technical constraints, and product dependencies that shaped what we could build.",
          },
          // TODO(copy): add one real finding from this mapping, e.g.
          //   "That showed users dropping off at [step], mostly because of [cause].
          //    So rather than [obvious fix], I [what you did]."
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
          // TODO(copy): add an "images" block once the paper sketch is ready.
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
        text: "I trained 70+ MBA students in UI/UX, data science, Git and GitHub, command-line workflows, scalable storage, and no-code tools.",
      },
      {
        type: "p",
        text: "I didn't teach UX as “making screens look good.” I taught the thinking behind a product.",
      },
    ],
    sections: [
      {
        heading: "The Gap",
        blocks: [
          {
            type: "p",
            text: "Most of the students understood business problems well, but had little experience turning those problems into digital products people could actually use.",
          },
        ],
      },
      {
        heading: "How I Taught It",
        blocks: [
          {
            type: "p",
            text: "Instead of teaching tools one at a time, I showed how design, technology, and business decisions connect.",
          },
          {
            type: "p",
            text: "It also made me better at explaining technical and design ideas simply.",
          },
          // TODO(copy): add a teaching artifact (an exercise, a slide, student
          // work) as an "images" block, or one student result.
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
            text: "I paired UX review with Google Analytics data to see where students engaged and where they dropped off, looking closely at navigation, content hierarchy, accessibility, and the moments people left.",
          },
          // TODO(copy): add what the data showed, e.g.
          //   "The biggest drop-off was at [page/step], because [cause]."
        ],
      },
      // TODO(copy): restore a "Low-Fidelity" section once the wireframe is ready
      // (caption: "Testing information hierarchy before visual design.").
      {
        heading: "Outcome",
        blocks: [
          {
            type: "p",
            text: "Working with the development and marketing teams, I improved navigation, content flow, and accessibility, and kept every change tied to the platform's engagement goals.",
          },
          // TODO(copy): name one change you shipped and its effect, e.g.
          //   "I [restructured X / changed Y], and [metric] moved from [a] to [b]."
        ],
      },
    ],
  },
];

export function getWork(slug: string): Work | undefined {
  return works.find((w) => w.slug === slug);
}
