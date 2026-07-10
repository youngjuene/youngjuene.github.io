export interface Experience {
  organization: string;
  role: string;
  detailHtml?: string;
  location?: string;
  period: string;
}

// The Experience section on the homepage renders only when this array is
// non-empty. Add internships, residencies, commissions, etc. Example:
//
// {
//   organization: 'Some Research Lab',
//   role: 'Research Intern in Sound Team',
//   detailHtml: 'Advisor: <a href="https://example.com">Some Name</a>',
//   location: 'Seoul, South Korea',
//   period: 'Jun 2024 – Aug 2024',
// },
export const experience: Experience[] = [];
