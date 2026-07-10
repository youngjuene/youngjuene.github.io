export interface Work {
  title: string;
  year: string;
  /** Path under public/, e.g. "/images/works/foo.jpg". Cards render without one too. */
  image?: string;
  imageAlt?: string;
  descriptionHtml: string;
  links: { label: string; url: string }[];
}

export const works: Work[] = [
  {
    title: 'Audible Garden',
    year: '2023 – 2025',
    image: '/images/works/audible-garden.jpg',
    imageAlt: 'Audible Garden installation — modified turntable reading an artificial marble disc',
    descriptionHtml:
      'A multimodal transcoding framework that converts landscape representation into multisensory output through data-driven visualization and sonification. A modified turntable interprets a sumi-ink marble disc, extending East Asian literati traditions of expressing inner worlds through landscape. Exhibited at the Korean Cultural Centre UK, London; published in <em>Leonardo</em>.',
    links: [
      { label: 'paper', url: 'https://doi.org/10.1162/leon_a_02704' },
      { label: 'video', url: 'https://vimeo.com/853254789' },
      { label: 'exhibition', url: 'https://leejinjoon.com/audible-garden-2' },
      {
        label: 'ArtReview',
        url: 'https://artreview.com/jinjoon-lee-audible-garden-korean-cultural-centre-uk-london-review/',
      },
    ],
  },
  {
    title: 'Streams in the Veins',
    year: '2024 – 2025',
    image: '/images/works/streams-in-the-veins.jpg',
    imageAlt: 'Streams in the Veins — interspecies interactive composing installation',
    descriptionHtml:
      'A harmonic cycle of multimodal signals for interspecies interactive composing, created with collaborators at the University of Tokyo. Plant biosignals and environmental data are transformed into an evolving musical ecosystem. Accepted for publication in <em>Leonardo</em>.',
    links: [{ label: 'project', url: 'https://synphysica.com/Streams-in-the-Veins' }],
  },
  {
    title: 'Monochromatic Urban Patchwork',
    year: '2024',
    descriptionHtml:
      'A map of averaged urban ambience: street-level imagery and field recordings are aggregated into monochromatic patches that expose the atmospheric texture of the city. Presented at ISEA 2024, Brisbane.',
    links: [
      {
        label: 'paper',
        url: 'https://airdrive.eventsair.com/eventsairseasiaprod/production-expertevents-public/4d31c12074794899ba20d0077ba3875d',
      },
    ],
  },
  {
    title: 'Micro-variation of Sound Objects',
    year: '2023',
    descriptionHtml:
      'Component separation and diffusion models generate families of subtle timbral variations from a single sound object — an algorithmic approach to speculative composition. Presented at ICMC 2023.',
    links: [
      {
        label: 'paper',
        url: 'https://drive.google.com/file/d/1bbhFNV9nmCn4hGhXdX8hCmUe9DRtF5c_/view?usp=sharing',
      },
      { label: 'code', url: 'https://github.com/youngjuene/microvar' },
    ],
  },
];
