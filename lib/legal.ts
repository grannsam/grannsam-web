// Shared shape for the legal pages (/integritet, /anvandarvillkor).
//
// Anything wrapped in [fylls i: …] is a decision only a human can make — company details, retention
// periods, liability terms, or a legal assessment. Those must be resolved (and the whole text
// reviewed by counsel) before these pages go live. See KM-462.

export type LegalBlock = {
  title: string;
  paragraphs?: string[];
  /** Bulleted: things that aren't a sequence. */
  items?: string[];
  /** A small table, e.g. purposes and legal bases, or sub-processors. */
  table?: { headers: string[]; rows: string[][] };
};

export type LegalDocument = {
  title: string;
  updated: string;
  intro: string;
  blocks: LegalBlock[];
};

/** Marks text that still needs a human decision, so it's obvious on the page and greppable. */
export const TODO = (what: string) => `[fylls i: ${what}]`;
