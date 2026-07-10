export interface ActivityItem {
  /** Display date, e.g. "Mar 2024" or "2023 – present". */
  date: string;
  html: string;
  link?: { label: string; url: string };
}

// The Service / Talks / Teaching section renders only the sub-lists that are
// non-empty (and is omitted entirely when all three are empty). Examples:
//
// service:  { date: '2025 – present', html: 'Reviewer, ISEA' }
// talks:    { date: 'Mar 2025', html: 'Mediated Atmospheres, Some University (Host: Some Name)' }
// teaching: { date: 'Sep 2024', html: 'TA, GCT500 Introduction to Culture Technology, KAIST GSCT' }

export const service: ActivityItem[] = [];

export const talks: ActivityItem[] = [];

export const teaching: ActivityItem[] = [];
