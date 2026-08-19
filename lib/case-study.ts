export type WorkBlock =
  | { type: "p"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "flow"; steps: string[] }
  | { type: "images"; images: string[] }
  | { type: "placeholders"; items: { label: string; caption: string }[] };

export type WorkSection = {
  heading: string;
  blocks: WorkBlock[];
};

export type CaseStudy = {
  slug: string;
  num: string;
  name: string;
  tag: string;
  metaLine1: string;
  metaLine2: string;
  intro: WorkBlock[];
  sections: WorkSection[];
};
