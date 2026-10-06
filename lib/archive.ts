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
        text: "I design across Momentum's design system, website, marketing, events, and social media, so the brand looks and feels the same wherever someone meets it.",
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
            text: "I work on both the product and the brand. That starts with understanding who Momentum's members are, what motivates them, and what stops them, then mapping how they discover and join activities. From there I shape the information architecture and the website, build the design system, and design the marketing, social, and event material, keeping it all consistent online and off.",
          },
          // TODO(copy): add one thing you learned about members and how it
          // changed the design, e.g. "Most first-timers [behaviour], so I [change]."
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
            text: "A big part of my work is building the design system from scratch: typography, colours, spacing, components, layouts, and interaction patterns.",
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
    ],
  },
  {
    slug: "surge",
    num: "02",
    name: "Surge",
    tag: "Product Designer",
    metaLine1: "Product Designer · Surge",
    metaLine2: "AI Sales Performance Assistant",
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
        heading: "Final Experience",
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
    slug: "banking-website",
    num: "03",
    name: "Banking Website",
    tag: "UI/UX Designer",
    metaLine1: "UI/UX Designer · Banking Website",
    metaLine2: "Web Experience · Information Architecture · UI Design",
    intro: [
      {
        type: "p",
        text: "A concept for a banking website that makes products and services simpler to find, understand, and compare.",
      },
      {
        type: "p",
        text: "It explores how a traditional bank's website could feel more modern and approachable.",
      },
    ],
    sections: [
      {
        heading: "The Problem",
        blocks: [
          {
            type: "p",
            text: "Banking websites pack in products, services, rates, support, and account options. The challenge was helping people quickly answer:",
          },
          {
            type: "flow",
            steps: [
              "What does the bank offer?",
              "Which product is right for me?",
              "What do I need?",
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
            text: "I organised the site around product discovery and simpler navigation, with several paths to the same information. The interface focuses on:",
          },
          {
            type: "list",
            items: [
              "Clear information hierarchy",
              "Product categorisation",
              "Simple navigation",
              "Financial product comparison",
              "Strong calls to action",
              "Accessible content structure",
              "Responsive web layouts",
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
        heading: "Final Experience",
        blocks: [
          {
            type: "p",
            text: "The result is a banking site that feels clear and trustworthy, and still looks like an institution you'd hand your money to.",
          },
        ],
      },
    ],
  },
  {
    slug: "ai-design-tools-website",
    num: "04",
    name: "AI Design Tools Website",
    tag: "UI/UX Designer",
    metaLine1: "UI/UX Designer · AI Design Platform",
    metaLine2: "Web Design · Interaction Design · Visual System",
    intro: [
      {
        type: "p",
        text: "A web experience for a set of AI design tools that help designers get from idea to execution faster.",
      },
      {
        type: "p",
        text: "It brings several tools into one place, from generating SVG icons and visuals to AI-assisted workflows and automatic layer renaming.",
      },
    ],
    sections: [
      {
        heading: "The Problem",
        blocks: [
          {
            type: "p",
            text: "Designers jump between tools for small, repetitive jobs: finding icons, generating visuals, renaming layers, making assets. Each one breaks their focus.",
          },
          {
            type: "p",
            text: "The opportunity: let AI handle the repetitive parts so the designer can stay on the creative work.",
          },
        ],
      },
      {
        heading: "The Solution",
        blocks: [
          {
            type: "p",
            text: "The site puts these AI tools side by side in one place, including:",
          },
          {
            type: "list",
            items: [
              "AI Design Assistant",
              "SVG Icon Generator",
              "AI Visual Generation",
              "AI Spellbook",
              "Intelligent Layer Renaming",
              "AI-assisted design utilities",
              "Creative visual experiments",
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
