export interface Education {
  institution: string;
  degree: string;
  detailHtml: string;
  period: string;
}

export const education: Education[] = [
  {
    institution: 'Korea Advanced Institute of Science and Technology (KAIST)',
    degree: 'Ph.D. Candidate in Graduate School of Culture Technology',
    detailHtml:
      '@ Total Experience Creative Media Lab (Advisor: <a href="https://jinjoonlee.com/">Jinjoon Lee</a>)',
    period: '2022 – present',
  },
  {
    institution: 'Korea Advanced Institute of Science and Technology (KAIST)',
    degree: 'M.Sc. in Graduate School of Culture Technology',
    detailHtml:
      '@ Music and Audio Computing Lab (Advisor: <a href="https://mac.kaist.ac.kr/~juhan/">Juhan Nam</a>)<br />Thesis: Hierarchical Classification of Environmental Sounds with Few-Shot Learning',
    period: '2020 – 2022',
  },
  {
    institution: 'Korea Maritime and Ocean University (KMOU)',
    degree: 'B.S. in Offshore Plant Management',
    detailHtml:
      'Magna Cum Laude (Advisors: <a href="https://www.kmou.ac.kr/greenandsmartship/ad/tepDept/main/view.do?mi=5268&teaSn=4181">Kwon-hae Cho</a> &amp; <a href="https://orcid.org/0000-0003-2116-3469">KangKi Lee</a>)',
    period: '2015 – 2019',
  },
];
