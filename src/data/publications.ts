export interface Publication {
  title: string;
  /** Author list; "Youngjun Choi" is emphasized automatically at render time. */
  authors: string;
  venue: string;
  /** Group heading the entry is listed under (e.g. "2025", "In Press"). */
  year: string;
  note?: string;
  type: 'journal' | 'conference';
  links: { label: string; url: string }[];
}

export const publications: Publication[] = [
  {
    title:
      'Streams in the Veins: Harmonic Cycle of Multimodal Signals for Interspecies Interactive Composing',
    authors:
      'Chiao Chi Chou, Youyang Hu, Youngjun Choi, Kaito Muramatsu, Jinjoon Lee, Yasuaki Kakehi',
    venue: 'Leonardo',
    year: 'In Press',
    type: 'journal',
    note: 'Accepted',
    links: [{ label: 'project', url: 'https://synphysica.com/Streams-in-the-Veins' }],
  },
  {
    title: 'Toward Diffused Multiplicity: Palimpsestic Characteristics in AI Art',
    authors: 'Youngjun Choi, Jinjoon Lee',
    venue:
      'ARTECH 2025 — Proceedings of the 12th International Conference on Digital and Interactive Arts',
    year: '2025',
    type: 'conference',
    links: [{ label: 'paper', url: 'https://doi.org/10.1145/3773699.3774367' }],
  },
  {
    title:
      'Audible Garden: Transcoding Literati Aesthetics in Landscape Representation Through a Multimodal Approach',
    authors: 'Youngjun Choi, Honggi Lee, Jinjoon Lee',
    venue: 'Leonardo',
    year: '2025',
    type: 'journal',
    note: 'A&HCI, Q1',
    links: [
      { label: 'paper', url: 'https://doi.org/10.1162/leon_a_02704' },
      { label: 'video', url: 'https://vimeo.com/853254789' },
      { label: 'exhibition', url: 'https://leejinjoon.com/audible-garden-2' },
      {
        label: 'ArtReview',
        url: 'https://artreview.com/jinjoon-lee-audible-garden-korean-cultural-centre-uk-london-review/',
      },
      { label: '美術手帖', url: 'https://bijutsutecho.com/magazine/news/report/28134' },
    ],
  },
  {
    title:
      'Interpreting Chaekgeori in the Digital Age: A Cinematic Exploration of Global Events at the Turn of the Year',
    authors: 'Jinkyung Her, Youngjun Choi, Jinjoon Lee',
    venue:
      'Proceedings of the International Symposium of Electronic/Emerging Art (ISEA) 2025',
    year: '2025',
    type: 'conference',
    links: [{ label: 'paper', url: 'https://data.doi.or.kr/10.23362/KOEN2025.07.25.2.140' }],
  },
  {
    title:
      'Mourning Dew: Storytelling of Nectar Ritual Painting through the Digital Moktak',
    authors: 'Dana Kim, Youngjun Choi, Jinjoon Lee',
    venue:
      'Proceedings of the International Symposium of Electronic/Emerging Art (ISEA) 2025',
    year: '2025',
    type: 'conference',
    links: [{ label: 'paper', url: 'https://data.doi.or.kr/10.23362/KOEN2025.07.25.1.072' }],
  },
  {
    title:
      'ImproVibration: A Vibrotactile System for Conveying Weight-Sharing in Contact Improvisation to Enhance Audience Experience',
    authors: 'Youlee Kim, Youngjun Choi, Sungbaek Kim, Jinjoon Lee',
    venue:
      'Proceedings of the International Symposium of Electronic/Emerging Art (ISEA) 2025',
    year: '2025',
    type: 'conference',
    links: [{ label: 'paper', url: 'https://data.doi.or.kr/10.23362/KOEN2025.07.25.3.206' }],
  },
  {
    title:
      'Hyperscanning Analysis in VR Train Simulator: Exploring Neural Connectivity and Learning Outcomes in Railway Training',
    authors:
      'Doyo Choi, Ye Won Kim, Youngjun Choi, Sungbaek Kim, Hangyeol Kang, Jinjoon Lee',
    venue: 'Proceedings of the HCI Society of Korea 2025',
    year: '2025',
    type: 'conference',
    links: [
      {
        label: 'paper',
        url: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12131557',
      },
    ],
  },
  {
    title: 'Harmonic Words, Narrative Chords: Textual Sonification using Part of Speech',
    authors: 'Jiin Ko, Youngjun Choi, Jinjoon Lee',
    venue:
      'Proceedings of the International Conference on New Interfaces for Musical Expression (NIME) 2024',
    year: '2024',
    type: 'conference',
    links: [{ label: 'paper', url: 'https://www.nime.org/proc/nime2024_5/index.html' }],
  },
  {
    title: 'Monochromatic Urban Patchwork: Map of Averaged Urban Ambience',
    authors: 'Youngjun Choi, Jinjoon Lee',
    venue:
      'Proceedings of the International Symposium of Electronic/Emerging Art (ISEA) 2024',
    year: '2024',
    type: 'conference',
    links: [
      {
        label: 'paper',
        url: 'https://airdrive.eventsair.com/eventsairseasiaprod/production-expertevents-public/4d31c12074794899ba20d0077ba3875d',
      },
    ],
  },
  {
    title:
      'Micro-variation of Sound Objects using Component Separation and Diffusion Models',
    authors: 'Philip Liu*, Youngjun Choi*, Jinjoon Lee (*equal contribution)',
    venue: 'Proceedings of the International Computer Music Conference (ICMC) 2023',
    year: '2023',
    type: 'conference',
    links: [
      {
        label: 'paper',
        url: 'https://drive.google.com/file/d/1bbhFNV9nmCn4hGhXdX8hCmUe9DRtF5c_/view?usp=sharing',
      },
      { label: 'code', url: 'https://github.com/youngjuene/microvar' },
    ],
  },
  {
    title: 'COVR: Co-op VR Coloring for Creating Place Attachment on Urban Heritage',
    authors: 'Jaehong Kim*, Seungwoo Jeon*, Youngjun Choi* (*equal contribution)',
    venue: 'Proceedings of the HCI Society of Korea 2023',
    year: '2023',
    type: 'conference',
    links: [
      {
        label: 'paper',
        url: 'https://drive.google.com/file/d/1eiPazpAtmDVLdv09XozW_mLfzNJy5L0j/view?usp=sharing',
      },
    ],
  },
  {
    title: '"Anyway,": Two-player Defense Game via Voice Conversation',
    authors: 'Minki Hong*, Youngjun Choi*, Sihun Cha* (*equal contribution)',
    venue:
      'Extended Abstracts of the Annual Symposium on Computer-Human Interaction in Play (CHI PLAY) 2021',
    year: '2021',
    type: 'conference',
    links: [{ label: 'paper', url: 'https://dl.acm.org/doi/pdf/10.1145/3450337.3483509' }],
  },
];

/** Publication groups in display order. */
export const publicationYears = [...new Set(publications.map((p) => p.year))];
