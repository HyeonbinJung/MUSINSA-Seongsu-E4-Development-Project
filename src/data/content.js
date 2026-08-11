/* ------------------------------------------------------------------
   All static deck copy and figures, kept out of the components so the
   sections stay pure layout. Numbers that count up on scroll live in
   `metrics.js`; everything already-formatted lives here.
   ------------------------------------------------------------------ */

/* ---- I. Executive Summary -------------------------------------- */

export const PILLARS = [
  {
    kicker: '01 · DISCOVER',
    title: 'Location Alpha',
    body: '성수역 × 연무장길 × MUSINSA Ecosystem. 패션·콘텐츠·F&B 중심 상권을 넘어 IT·플랫폼 기업의 전략적 이전이 이어지는 업무·상업 복합권역으로 성장. E4는 Office Demand와 Destination Retail Traffic을 동시에 확보할 수 있는 핵심 Micro-location.',
  },
  {
    kicker: '02 · IMPROVE',
    title: 'Operating Alpha',
    body: 'Master Lease × Retail Platform × Smart Operation. MUSINSA 장기 Master Lease를 통해 초기 Leasing Risk를 낮추고 안정적 Cash Flow를 확보. 1–8F Retail Platform과 Smart Building 운영으로 공간 활용도와 Tenant Stickiness 향상.',
  },
  {
    kicker: '03 · VALUE-UP',
    title: 'Exit Alpha',
    body: 'Flexible Design × Track Record × Dynamic Exit. Lease Expiry 이후 Multi-Tenant Conversion이 가능한 범용성을 개발단계부터 확보. 장기 NOI·운영·ESG Track Record를 축적해 Institutional Buyer Universe 확대.',
  },
];

/* ---- II. Business Overview ------------------------------------- */

export const PROGRAM = [
  { zone: '9–12F', program: 'Management & Buying Office', role: 'Retail Control Tower' },
  { zone: '5–8F', program: 'Fixed Retail / Specialist Operator', role: 'Destination Retail Income' },
  { zone: '1–4F', program: 'Popup / Gallery / Café', role: 'Discovery / Brand Experience' },
  { zone: 'B1–B5', program: 'Parking / Facility', role: 'Operating Support' },
  { zone: 'Rooftop', program: 'Energy / ESG Infrastructure', role: 'OPEX Management' },
];

/* ---- III. Investment & Fund Structure -------------------------- */

export const USES = [
  { label: '토지비', value: '580.0억' },
  { label: '직접공사비', value: '312.5억' },
  { label: '설계·감리·TI·세금·예비비', value: '116.4억' },
  { label: '금융비용 및 기타', value: '64.1억' },
];

export const SOURCES = [
  { label: 'Institutional LP', value: '300억', pct: '28.0%' },
  { label: 'Mastern Sponsor Co-invest', value: '50억', pct: '4.7%' },
  { label: 'MUSINSA Proposed Rollover', value: '100억', pct: '9.3%' },
  { label: 'Senior PF', value: '623억', pct: '58.1%' },
];

/* ---- IV. Exit Strategy ----------------------------------------- */

export const EXIT_PHASES = [
  {
    years: 'YEAR 7–9',
    title: 'Early Exit',
    points: ['Cap Rate Compression', 'Funding Cost 하락', 'Buyer Liquidity 확대', 'SI Strategic Premium'],
    result: 'OPPORTUNISTIC SALE',
  },
  {
    years: 'YEAR 10',
    title: 'Base Exit',
    points: ['Stabilized NOI', 'Lease Visibility', 'Operating Track Record', 'Normal Transaction Market'],
    result: 'COMPETITIVE SALE',
  },
  {
    years: 'YEAR 11–12+',
    title: 'Extended Exit',
    points: ['Cap Rate Expansion', 'Funding Market Stress', 'Wide Bid-Ask Spread', 'Refinance + Stable NOI'],
    result: 'RECOVERY EXIT',
  },
];

export const TIMELINE = [
  { when: 'T-12M', phase: 'PRE-MARKETING', detail: 'Sale Advisor 선정 · Buyer Mapping · Broker Opinion of Value' },
  {
    when: 'T-9M',
    phase: 'ASSET PACKAGING',
    detail: 'Investment Memorandum · Legal/Tax/Technical DD · Historical NOI / Lease / CAPEX / ESG',
  },
  { when: 'T-6M', phase: 'COMPETITION', detail: 'NBO · Shortlist · Binding Bid · BAFO' },
  { when: 'T-3M', phase: 'EXECUTION', detail: 'Preferred Bidder · SPA · Closing' },
];

export const GROSS_SENSITIVITY = [
  { cap: '4.25%', a: '2,355', b: '2,479', c: '2,603', highlight: false },
  { cap: '4.50%', a: '2,224', b: '2,341', c: '2,459', highlight: true },
  { cap: '4.75%', a: '2,107', b: '2,218', c: '2,329', highlight: false },
  { cap: '5.00%', a: '2,002', b: '2,107', c: '2,213', highlight: false },
];

export const EXIT_REFERENCE = [
  { label: 'Most relevant peer', pyeong: '3,640', won: '1,075.6억' },
  { label: '2039 Exit PV @ 6%', pyeong: '3,770', won: '1,114.0억' },
  { label: '2039 Exit PV @ 7%', pyeong: '3,343', won: '988.0억' },
  { label: '2039 Exit PV @ 8%', pyeong: '2,971', won: '878.0억' },
];

/* ---- V. Retail · ESG · AI Operations --------------------------- */

export const FLOORS = [
  {
    floor: '1–4F',
    name: 'Popup · Gallery · Café',
    detail: '층별 동선과 브랜드 등급을 결합해 동시에 약 31개 팝업을 운영',
    metric: '963.4억',
    metricLabel: 'GROSS SALES PROXY',
  },
  {
    floor: '5F',
    name: 'Beauty Discovery',
    detail: '8개 고정점포 · 232평 — 카테고리 분산형 뷰티 플로어로 탐색성과 체류를 강화',
    metric: '74.4억',
    metricLabel: 'GROSS SALES PROXY',
  },
  {
    floor: '6F',
    name: "Women's Fashion",
    detail: '5개 중형 점포 · 241평 — 중형 패션 숍 중심의 비교 쇼핑형 플로어',
    metric: '85.6억',
    metricLabel: 'GROSS SALES PROXY',
  },
  {
    floor: '7F',
    name: "Men's Fashion",
    detail: '5개 중형 점포 · 241평 — 컨템포러리 · 스트리트 · 캐주얼을 혼합한 목적방문형',
    metric: '92.5억',
    metricLabel: 'GROSS SALES PROXY',
  },
  {
    floor: '8F',
    name: 'Rare & Resale',
    detail: '전문 운영사 1개 · 241평 — 전체 층을 장기 임차하는 Destination Retail',
    metric: '83.3억',
    metricLabel: 'GROSS SALES PROXY',
  },
  {
    floor: '1–8F',
    name: 'Total Retail Platform',
    detail: '5–8F Fixed Retail 335.8억 · Share of Total 25.8%',
    metric: '1,299.2억',
    metricLabel: 'TOTAL GROSS SALES PROXY',
  },
];

export const SMART_OPS = [
  {
    label: 'AI-BMS',
    body: 'HVAC · 조명 · 환기 · IAQ · 전력 · 급배수 통합제어. 재실률 · 날씨 · 전력요금 학습으로 피크전력 감소 및 OPEX 절감.',
  },
  {
    label: 'PREDICTIVE MAINTENANCE',
    body: '진동 · 온도 · 전력소비 · 압력 · 운전시간 분석으로 냉동기 · AHU · 승강기 · 펌프 고장 사전예방. 긴급고장 감소.',
  },
  {
    label: 'CARBON DASHBOARD',
    body: 'Scope 1·2 / 층별 전력 / HVAC / 태양광 / ESS 추적. Monthly Carbon · ESG · Energy · Tenant Report 자동 생성.',
  },
];

export const PLATFORM_CARDS = [
  { title: 'POP-UP', detail: '브랜드 발굴 · 검증', src: 'assets/zone-anchor.png' },
  { title: 'GALLERY', detail: '문화 콘텐츠 · 체류', src: 'assets/zone-stay.png' },
  { title: 'CAFÉ', detail: '공정무역 F&B · 휴식', src: 'assets/zone-discovery.png' },
];

export const OP_BLOCKS = [
  {
    index: '01',
    title: 'Operating Concept',
    lines: ['무신사는 브랜드 모집 · 팝업 일정 · 공간배정 담당', '앱 연동 · 고객반응 데이터 수집 운영'],
  },
  {
    index: '02',
    title: 'Brand Discovery Funnel',
    lines: [
      '미입점 단기 팝업',
      '데이터 검증 → 무신사 입점',
      '성장 브랜드 구역 → 유명 브랜드 앵커',
      '5–7F 고정점포 입점 후보',
    ],
  },
  {
    index: '03',
    title: 'Asset Value Link',
    lines: ['운영성과는 마스턴 NOI에 직접 반영하지 않음', 'MUSINSA Renewal과 Exit Marketability를 강화'],
  },
];

export const ZONING = [
  { floor: '1F', mix: 'A1 / B1 / C5', a: '8%', b: '22%', c: '70%' },
  { floor: '2F', mix: 'A1 / B2 / C8', a: '10%', b: '25%', c: '65%' },
  { floor: '3F', mix: 'A1 / B2 / C6', a: '25%', b: '28%', c: '47%' },
  { floor: '4F', mix: 'A2 / B1 / C1 + G/C', a: '63%', b: '25%', c: '12%' },
];

export const ZONING_RULES = [
  '1 유명 브랜드는 상층부 목적지(앵커)로 사용',
  '2 신생 브랜드는 필수 동선상에 집중 배치',
  '3 수직 동선과 앵커를 반대편에 두어 노출 극대화',
  '4 4층은 유명 브랜드 중심 + 갤러리 · 카페로 체류시간 확대',
];

export const FLOW_STEPS = [
  { label: 'Entrance', on: false },
  { label: 'C/B Discovery', on: false },
  { label: 'Vertical Core', on: false },
  { label: 'A Anchor', on: true },
  { label: 'Gallery / Café', on: false },
  { label: 'App Purchase', on: false },
];

export const ANCHOR_LOGIC = [
  { title: 'Vertical Anchor', detail: '4층 A형은 자기 층만 활성화하지 않고 1–3층 통과 유동까지 만든다' },
  { title: 'Micro Anchor', detail: '1–2층 A형은 동선 중간의 소형 품질보증 역할' },
  { title: 'Transition Layer', detail: '3층은 상층 목적지로 넘어가는 전환층 · A형 25%' },
];

export const EXPOSURE_LOGIC = [
  { title: 'C Frontage', detail: '1층 C형 70%이면 핵심 쇼윈도 전면도 70–80% 점유' },
  { title: 'B Buffer', detail: '긴 C형 구역 중간에 B형을 배치해 신뢰도·구매전환 보완' },
  { title: 'Vertical Core', detail: '수직동선을 정문에서 멀리 두어 1층 횡단을 강제' },
];

export const ZONE_CARDS = [
  { title: 'ANCHOR DESTINATION', detail: 'A형은 목적방문을 만든다', src: 'assets/zone-anchor.png' },
  { title: 'DISCOVERY ZONE', detail: 'B/C형은 이동 중 발견된다', src: 'assets/zone-discovery.png' },
  { title: 'STAY EXTENSION', detail: '전시 · 카페로 체류시간 확대', src: 'assets/zone-stay.png' },
];

/* ---- VI. Management & Buying Office ---------------------------- */

export const OFFICE_FUNCTIONS = [
  { title: 'Buyer / Merchandising', detail: '성과 좋은 브랜드 검토 · 바잉 · 온라인 입점 후보화' },
  { title: 'Brand Acquisition / Leasing', detail: '신규 브랜드 발굴 · 고정점포 후보군 관리' },
  { title: 'Popup Planning / Tenant Mgmt.', detail: '팝업 일정 · 테넌트 계약 · 매장 운영관리' },
  { title: 'Visual Merchandising / Data', detail: '동선 · 진열 · 매출 · 체류시간 분석' },
];

export const CONTROL_TOWER = [
  {
    label: '1–8F RETAIL DATA',
    body: 'Traffic · Conversion · Sales · Dwell Time · Popup / Event Performance · Fixed-store Sales',
    highlight: false,
  },
  {
    label: '9–12F DECISION HUB',
    body: 'MD Review · Buyer Meeting · Tenant Mix · Renewal / Replacement / Follow-up Popup',
    highlight: true,
  },
  {
    label: 'PLATFORM OUTPUT',
    body: 'Online Onboarding · New Popup · Renewal · Brand Replacement · Merchandising Update',
    highlight: false,
  },
];

/* ---- VII. Exit & Risk Analysis --------------------------------- */

export const IRR_SENSITIVITY = [
  { cap: '4.25%', a: '15.8%', b: '16.2%', c: '16.7%', highlight: false },
  { cap: '4.50%', a: '15.3%', b: '15.7%', c: '16.2%', highlight: true },
  { cap: '4.75%', a: '14.8%', b: '15.3%', c: '15.7%', highlight: false },
  { cap: '5.00%', a: '14.4%', b: '14.8%', c: '15.2%', highlight: false },
];

export const SCENARIOS = [
  { metric: 'Exit Cap Rate', base: '4.50%', down: '5.00%', stress: '5.50%' },
  { metric: 'Renewal NOI Factor', base: '100%', down: '90%', stress: '80%' },
  { metric: 'Construction Overrun', base: '0%', down: '5%', stress: '10%' },
  { metric: 'Completion Delay', base: '0M', down: '6M', stress: '12M' },
  { metric: 'Total Equity Required', base: '450.0억', down: '521.6억', stress: '593.1억' },
  { metric: 'Gross Exit Value', base: '2,341.4억', down: '1,896.6억', stress: '1,532.6억' },
  { metric: 'Net Sale Proceeds', base: '1,695.0억', down: '1,245.1억', stress: '878.9억' },
  { metric: 'All-in Equity XIRR', base: '15.7%', down: '11.4%', stress: '7.6%' },
  { metric: 'Equity MOIC', base: '5.11x', down: '3.48x', stress: '2.39x' },
  { metric: 'Y1 DSCR', base: '2.65x', down: '2.40x', stress: '2.19x' },
];

export const RISK_REGISTER = [
  {
    risk: 'Lease Rollover',
    impact: 'High',
    exposure: '10Y MUSINSA lease broadly coincides with exit',
    mechanism: 'Renewal NOI factor 90% / 80%',
    mitigation: 'Y7–Y8 조기 재계약 또는 잔존 WALE 확보 후 Exit',
  },
  {
    risk: 'Exit Pricing',
    impact: 'High',
    exposure: '4.50% base exit cap',
    mechanism: '5.00% / 5.50% cap expansion',
    mitigation: '기관투자자 거래사례 기반 valuation + cap rate sensitivity 유지',
  },
  {
    risk: 'Construction / Delay',
    impact: 'High',
    exposure: '0% overrun, no delay',
    mechanism: '+5% / +10% cost; +6 / +12 months',
    mitigation: 'GMP · 예비비 · PF 여유한도, 월별 Cost-to-Complete monitoring',
  },
  {
    risk: 'Interest / Refi',
    impact: 'Medium',
    exposure: '4.75% stabilized loan rate',
    mechanism: '+50 / +100 bps refi rate',
    mitigation: '보수적 LTV, 금리 헤지 및 조기 리파이낸싱 검토',
  },
  {
    risk: 'Single Tenant',
    impact: 'High',
    exposure: '100% MUSINSA concentration / 전대층 18개 장기 임차인',
    mechanism: 'Credit deterioration or non-renewal',
    mitigation:
      '보증 · covenants, 5–8F 장기 전대층을 대체 임대계획의 기반으로 활용, conversion plan 확보',
  },
  {
    risk: 'NOI / Opex Definition',
    impact: 'High',
    exposure: 'Base rent treated as rental NOI',
    mechanism: 'Owner-borne opex reduces distributable NOI',
    mitigation: 'Net lease 조건 확인, Opex/Capex reserve 별도 차감 반영',
  },
];

/* ---- VIII. Financial Model Appendix ---------------------------- */

export const MODEL = [
  { metric: 'Total Development Cost', value: '1,073억', comment: 'Land 580 / Construction 312.5 / Other 180.5' },
  { metric: 'Equity / Senior PF', value: '450억 / 623억', comment: 'Equity / Cost 41.9%' },
  { metric: 'Y1 NOI / YoC', value: '78.4억 / 7.3%', comment: 'Updated rent roll + 3.0% escalation' },
  { metric: 'Gross Exit Value', value: '2,341.4억', comment: 'Y11 NOI 105.4 / Exit cap 4.5%' },
  { metric: 'Net Equity Exit Proceeds', value: '1,695.0억', comment: 'Less 1.0% sale cost + debt repayment' },
  { metric: 'All-in Equity XIRR', value: '15.7%', comment: '2026 close → 2039 exit; incl. development' },
  { metric: 'Equity MOIC / Y1 CoC', value: '5.11x / 10.8%', comment: 'Post-completion IRR 22.1% / Y10 CoC 16.2%' },
];

export const CF_YEARS = ['Y1', 'Y2', 'Y3', 'Y4', 'Y5', 'Y6', 'Y7', 'Y8', 'Y9', 'Y10'];
export const CF_NOI = [78.4, 80.8, 83.2, 85.7, 88.2, 90.9, 93.6, 96.4, 99.3, 102.3];
export const CF_EQUITY = [48.8, 51.2, 53.6, 56.1, 58.6, 61.3, 64.0, 66.8, 69.7, 72.7];
export const CF_CHART_MAX = 110;

export const CF_ROWS = [
  { label: 'NOI', tinted: false, values: CF_NOI.map((v) => v.toFixed(1)) },
  { label: 'CF to Equity', tinted: false, values: CF_EQUITY.map((v) => v.toFixed(1)) },
  {
    label: 'CoC',
    tinted: true,
    values: ['10.8%', '11.4%', '11.9%', '12.5%', '13.0%', '13.6%', '14.2%', '14.9%', '15.5%', '16.2%'],
  },
];

export const PF_QUARTERS = [
  'Close', '26Q4', '27Q1', '27Q2', '27Q3', '27Q4',
  '28Q1', '28Q2', '28Q3', '28Q4', '29Q1', '29Q2',
];
export const PF_BALANCES = [130, 170, 225, 285, 345, 400, 455, 505, 550, 588, 612, 623];
export const PF_CHART_MAX = 660;

export const PF_METRICS = [
  { metric: 'Final Development PF Balance', value: '623.0억', comment: 'Senior PF commitment / stabilized debt', tinted: true },
  { metric: 'Capitalized Interest', value: '56.3억', comment: 'Development period interest carry', tinted: false },
  { metric: 'Financing Fee', value: '7.8억', comment: 'Development financing fee', tinted: false },
  { metric: 'Financing & Other Total', value: '64.1억', comment: 'Interest + fee reconciliation', tinted: false },
  { metric: 'Total Sources / Uses', value: '1,073.0억', comment: 'Balances to updated TDC', tinted: false },
];

export const FUNDING_LOGIC = [
  'Land acquisition funded by 450억 equity + initial PF draw',
  'Construction draws are tied to non-land development cost curve',
  'Need-based PF drawdown controls interest carry',
];

const RETAIL_SOURCE = [
  ['1F', 'Popup Discovery', 208.0, '16.0%'],
  ['2F', 'Popup Discovery / Growth', 308.0, '23.7%'],
  ['3F', 'Popup Transition', 260.0, '20.0%'],
  ['4F', 'Anchor + Gallery / Café', 187.4, '14.4%'],
  ['5F', 'Beauty Discovery', 74.4, '5.7%'],
  ['6F', "Women's Fashion", 85.6, '6.6%'],
  ['7F', "Men's Fashion", 92.5, '7.1%'],
  ['8F', 'Rare & Resale', 83.3, '6.4%'],
];

const RETAIL_BAR_MAX = 308;

export const RETAIL_ROWS = [
  ...RETAIL_SOURCE.map(([floor, program, sales, share]) => ({
    floor,
    program,
    sales: `${sales.toFixed(1)}억`,
    share,
    barWidth: `${((sales / RETAIL_BAR_MAX) * 100).toFixed(1)}%`,
    barTone: sales >= 150 ? 'soft' : 'solid',
    total: false,
  })),
  {
    floor: 'Total',
    program: '1F–8F',
    sales: '1,299.2억',
    share: '100.0%',
    barWidth: '0%',
    barTone: 'none',
    total: true,
  },
];

export const ROADMAP_PHASES = [
  { label: 'PHASE 1 · DEVELOP', span: '2026 → 2029', active: false },
  { label: 'PHASE 2 · OPERATE & VALUE-UP', span: '2029 → 2037', active: true },
  { label: 'PHASE 3 · EXIT', span: '2038 → 2039', active: false },
];

export const ROADMAP = [
  { when: '2026 Q4', title: 'Land Close', detail: 'REF 설정 · Equity 450억 납입 · Initial PF Draw 130억', highlight: false },
  { when: '2027 – 2029', title: 'Construction', detail: '공정률 연동 PF Drawdown · 월별 Cost-to-Complete 관리', highlight: false },
  { when: '2029 H1', title: 'Completion & Lease Start', detail: 'PF 623억 확정 · MUSINSA 10Y Master Lease 개시', highlight: false },
  { when: '2030 – 2035', title: 'Stabilized Operation', detail: 'Retail Platform 운영 · AI-BMS/ESG Track Record 축적', highlight: false },
  { when: '2036 – 2037', title: 'Renewal Window', detail: 'Y7–Y8 재계약 협상 · Multi-Tenant Conversion Plan 확정', highlight: false },
  { when: '2038 – 2039', title: 'Pre-marketing & Base Exit', detail: 'T-12M Buyer Mapping · 공개경쟁입찰 · SPA / Closing', highlight: true },
];

/* ---- Team ------------------------------------------------------- */

export const TEAM = [
  {
    name: 'Hyeonbin Jung',
    role: 'Research Assistant / FA Deal General Advisor',
    school: 'Columbia University',
    degree: 'B.A. in Computer Science & Mathematics',
    focus: 'Deloitte Korea · Paratus Investment · Yuanta Investment',
  },
  {
    name: 'Seungwook Lee',
    role: 'Market & Strategy',
    school: "King's College London",
    degree: 'B.A. in History & Political Economy',
    focus: 'Economic analysis · Market research perspective · Business Strategy · Operation Strategy',
  },
  {
    name: 'Jaeyong Han',
    role: 'Finance & Exit',
    school: 'University of Toronto',
    degree: 'Rotman Commerce, B.Com.',
    focus: 'Finance · Exit Strategy · Operation Strategy',
  },
];

export const CAPABILITY = ['Investment Research', 'Market Analysis', 'Development Strategy', 'Financial Modeling'];
