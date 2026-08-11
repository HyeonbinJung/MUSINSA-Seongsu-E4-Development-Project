/** Page ids, in header order. `home` is the landing page. */
export const NAV = [
  { id: 'sec1', numeral: 'Ⅰ', label: 'Executive Summary', title: 'Executive Summary', pages: '01 – 02' },
  { id: 'sec2', numeral: 'Ⅱ', label: 'Business Overview', title: 'Business Overview', pages: '03 – 07' },
  { id: 'sec3', numeral: 'Ⅲ', label: 'Structure', title: 'Investment & Fund Structure', pages: '08 – 15' },
  { id: 'sec4', numeral: 'Ⅳ', label: 'Exit', title: 'Exit Strategy', pages: '16 – 19' },
  { id: 'sec5', numeral: 'Ⅴ', label: 'Retail · ESG · AI', title: 'Retail · ESG · AI Operations', pages: '20 – 31' },
  { id: 'sec6', numeral: 'Ⅵ', label: 'Management', title: 'Management & Buying Office', pages: '32 – 33' },
  { id: 'sec7', numeral: 'Ⅶ', label: 'Risk', title: 'Exit & Risk Analysis', pages: '34 – 42' },
  { id: 'sec8', numeral: 'Ⅷ', label: 'Appendix', title: 'Financial Model Appendix', pages: '43 – 46' },
  { id: 'team', numeral: '—', label: 'Team', title: 'Team Introduction', pages: '' },
];

export const PAGE_IDS = ['home', ...NAV.map((n) => n.id)];
