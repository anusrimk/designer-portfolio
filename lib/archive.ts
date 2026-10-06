import type { CaseStudy } from "./case-study";

export const archiveItems: CaseStudy[] = [
  {
    slug: "momentum-health-club",
    num: "01",
    name: "Momentum Health Club",
    tag: "Product Designer",
    metaLine1: "Product Designer · Momentum Health Club",
    metaLine2: "Design System · Website · Marketing · Brand Experience",
    intro: [
      {
        type: "p",
        text: "Momentum Health Club is a community-led health and fitness platform built on one idea: staying healthy should feel social, welcoming, and sustainable, not intimidating or competitive.",
      },
      {
        type: "p",
        text: "I designed across Momentum's design system, website, marketing, events, and social media, so the brand would look and feel the same wherever someone met it.",
      },
    ],
    sections: [
      {
        heading: "The Problem",
        blocks: [
          {
            type: "p",
            text: "Fitness tends to feel either transactional or niche. Plenty of people want to get healthier, but struggle to find a community welcoming enough to keep coming back to.",
          },
          {
            type: "p",
            text: "Momentum needed a digital experience that showed its community-first approach and made events and activities simple to understand and join.",
          },
        ],
      },
      {
        heading: "My Approach",
        blocks: [
          {
            type: "p",
            text: "I worked on both the product and the brand. That started with understanding who Momentum's members are, what motivates them, and what stops them, then mapping how they discover and join activities. From there I shaped the information architecture and the website, built the design system, and designed the marketing, social, and event material, keeping it all consistent online and off.",
          },
        ],
      },
      {
        heading: "User Flow",
        blocks: [
          {
            type: "flow",
            steps: [
              "Discover Momentum",
              "Explore Community",
              "Browse Events",
              "View Event",
              "Join",
              "Participate",
              "Return",
            ],
          },
        ],
      },
      {
        heading: "Low-Fidelity Exploration",
        blocks: [
          {
            type: "p",
            text: "Before anything gets polished, I try out different structures with paper sketches, wireframes, and user flows.",
          },
        ],
      },
      {
        heading: "Design System",
        blocks: [
          {
            type: "p",
            text: "A big part of my work was building the design system from scratch: typography, colours, spacing, components, layouts, and interaction patterns.",
          },
          {
            type: "p",
            text: "The goal: Momentum should feel like one brand, whether someone finds it through the website, an Instagram post, an event poster, or in person.",
          },
        ],
      },
      {
        heading: "Deliverables",
        blocks: [
          {
            type: "list",
            items: [
              "Design System",
              "Website",
              "Marketing Assets",
              "Social Media",
              "Event Collateral",
              "Brand Experience",
            ],
          },
        ],
      },
      {
        heading: "Outcome",
        blocks: [
          {
            type: "p",
            text: "The project was paused midway, so there are no launch results to share. What's here is the research, structure, and system work up to that point, and the thinking I'd pick back up.",
          },
        ],
      },
    ],
  },
  {
    slug: "surge",
    num: "02",
    name: "Surge",
    tag: "Product Designer",
    metaLine1: "Product Designer · Surge",
    metaLine2: "Hackathon · AI Sales Performance Assistant",
    intro: [
      {
        type: "p",
        text: "Surge is an AI sales assistant that helps salespeople understand how their day went, see what to improve, and get personalised coaching.",
      },
      {
        type: "p",
        text: "Instead of just showing numbers, it turns performance data into specific feedback.",
      },
    ],
    sections: [
      {
        heading: "The Problem",
        blocks: [
          {
            type: "p",
            text: "Sales teams have plenty of performance data, but data alone doesn't tell a salesperson what to fix or how.",
          },
          {
            type: "p",
            text: "Salespeople need to understand their performance without manually going through calls, goals, and metrics every day.",
          },
        ],
      },
      {
        heading: "The Solution",
        blocks: [
          {
            type: "p",
            text: "Surge brings performance tracking, call analysis, AI feedback, goal tracking, and insights into one experience. The product helps users answer:",
          },
          {
            type: "flow",
            steps: [
              "How did I perform?",
              "What went wrong?",
              "What can I improve?",
              "What should I focus on tomorrow?",
            ],
          },
        ],
      },
      {
        heading: "User Flow",
        blocks: [
          {
            type: "flow",
            steps: [
              "Onboarding",
              "Dashboard",
              "Daily Goals",
              "Call Analysis",
              "AI Feedback",
              "Reports",
              "Performance Improvement",
            ],
          },
          {
            type: "p",
            text: "A secondary loop allows users to compare performance through leaderboards and progress tracking.",
          },
        ],
      },
      {
        heading: "Key Features",
        blocks: [
          {
            type: "list",
            items: [
              "AI-powered performance score",
              "Call analysis",
              "Personalised AI feedback",
              "Daily goals",
              "Sales performance dashboard",
              "Reports & insights",
              "Leaderboards",
              "Profile & settings",
            ],
          },
        ],
      },
      {
        heading: "Outcome",
        blocks: [
          {
            type: "p",
            text: "The final interface turns dense performance data into simple coaching: a score, visual trends, specific feedback, and clear next steps.",
          },
        ],
      },
    ],
  },
  {
    slug: "opul",
    num: "03",
    name: "OPUL",
    tag: "UI/UX Designer",
    metaLine1: "UI/UX Designer · OPUL",
    metaLine2: "Concept · Web Experience · Information Architecture · UI Design",
    intro: [
      {
        type: "p",
        text: "OPUL is a modern banking website for an employee card that covers perks, expenses, benefits, and family spending in one product. The design makes it simple to understand what the card does and decide to get started, through clear navigation and an intuitive experience.",
      },
    ],
    sections: [
      {
        heading: "The Problem",
        blocks: [
          {
            type: "p",
            text: "OPUL's card does several jobs at once: employee perks, expense management, benefits, and family spending. The challenge was explaining all of that in a few seconds, on a phone as easily as on a laptop, without burying it in a feature list. A visitor needed to quickly answer:",
          },
          {
            type: "flow",
            steps: [
              "What is this card?",
              "What can I do with it?",
              "How fast can I start?",
              "What do I do next?",
            ],
          },
        ],
      },
      {
        heading: "The Solution",
        blocks: [
          {
            type: "p",
            text: "I built the page around one product and one promise, and gave each section a single job:",
          },
          {
            type: "list",
            items: [
              "The hero says it in one line, “The first Employee Consumer Card”, with the card itself as the centrepiece",
              "A feature grid gives each benefit its own tile instead of a bullet list",
              "Onboarding pairs the promise of activating in under 5 minutes with a real account screen, so the claim feels tangible",
              "Family cards show shared limits as a stack of co-branded cards, so the idea reads at a glance",
              "“Specially forged for you” presents the card as a 3D object a business can picture with its own branding",
              "One next step throughout: Request a Demo",
              "Desktop and mobile layouts designed side by side",
            ],
          },
        ],
      },
      {
        heading: "User Flow",
        blocks: [
          {
            type: "flow",
            steps: [
              "Homepage",
              "Explore Products",
              "Select Product",
              "Understand Benefits",
              "Compare",
              "Apply / Get Started",
            ],
          },
        ],
      },
      {
        heading: "Outcome",
        blocks: [
          {
            type: "p",
            text: "The result is a banking site that feels clear and trustworthy, and still looks like an institution you'd hand your money to.",
          },
          {
            type: "images",
            images: [
              "/archive/banking01.png",
              "/archive/banking02.png",
              "/archive/banking03.png",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "diagram-ui-recreation",
    num: "04",
    name: "Diagram — UI Recreation",
    tag: "UI Recreation",
    metaLine1: "Visual Design Study · Diagram",
    metaLine2: "UI Recreation · Web Design · Visual System",
    intro: [
      {
        type: "p",
        text: "A recreation of the marketing site for Diagram, the AI design-tools company Figma acquired in 2023. The original design is Diagram's; I rebuilt it in Figma as a visual design study.",
      },
      {
        type: "p",
        text: "Diagram presented a family of AI tools for designers, from SVG icon and image generation to automatic layer renaming, as one product. Its site was a good example of making a set of separate tools feel like a single, coherent brand.",
      },
    ],
    sections: [
      {
        heading: "What I Recreated",
        blocks: [
          {
            type: "list",
            items: [
              "The landing page, where each tool orbits the Diagram mark like a planet",
              "The feature grid, with one card per AI tool",
              "The Genius product page and its feature cards",
            ],
          },
        ],
      },
      {
        heading: "Outcome",
        blocks: [
          {
            type: "p",
            text: "Three screens rebuilt in Figma from the original site.",
          },
          {
            type: "images",
            images: [
              "/archive/diagram01.png",
              "/archive/diagram02.png",
              "/archive/diagram03.png",
            ],
          },
        ],
      },
    ],
  },
];

export function getArchiveItem(slug: string): CaseStudy | undefined {
  return archiveItems.find((a) => a.slug === slug);
}
