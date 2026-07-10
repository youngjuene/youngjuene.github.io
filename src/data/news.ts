export interface NewsItem {
  /** Display date, e.g. "May 2025" or just "2025" when the month is uncertain. */
  date: string;
  html: string;
  link?: { label: string; url: string };
}

// NOTE: dates below were reconstructed from publication venues — please verify
// and refine (add months) where you remember them. Newest first.
export const news: NewsItem[] = [
  {
    date: '2025',
    html: '🎉 <em>Streams in the Veins</em> has been accepted for publication in <strong>Leonardo</strong>.',
    link: { label: 'project', url: 'https://synphysica.com/Streams-in-the-Veins' },
  },
  {
    date: '2025',
    html: 'Presented <em>Toward Diffused Multiplicity: Palimpsestic Characteristics in AI Art</em> at ARTECH 2025.',
    link: { label: 'paper', url: 'https://doi.org/10.1145/3773699.3774367' },
  },
  {
    date: 'May 2025',
    html: 'Three papers presented at ISEA 2025 in Seoul — <em>Interpreting Chaekgeori in the Digital Age</em>, <em>Mourning Dew</em>, and <em>ImproVibration</em>.',
  },
  {
    date: '2025',
    html: '<em>Audible Garden</em> is published in <strong>Leonardo</strong> (A&amp;HCI, Q1).',
    link: { label: 'paper', url: 'https://doi.org/10.1162/leon_a_02704' },
  },
  {
    date: 'Sep 2024',
    html: 'Presented <em>Harmonic Words, Narrative Chords</em> at NIME 2024.',
    link: { label: 'paper', url: 'https://www.nime.org/proc/nime2024_5/index.html' },
  },
  {
    date: 'Jun 2024',
    html: 'Presented <em>Monochromatic Urban Patchwork</em> at ISEA 2024 in Brisbane.',
  },
  {
    date: 'Jul 2023',
    html: '<em>Audible Garden</em> exhibited at the Korean Cultural Centre UK, London (Jul&ndash;Oct 2023) — reviewed in ArtReview and 美術手帖.',
    link: {
      label: 'ArtReview',
      url: 'https://artreview.com/jinjoon-lee-audible-garden-korean-cultural-centre-uk-london-review/',
    },
  },
];
