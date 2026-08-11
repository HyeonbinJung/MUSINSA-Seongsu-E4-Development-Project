import { CountGroup, Num } from '../components/CountGroup';
import { NAV } from '../data/nav';
import './Home.css';

const HERO_STATS = [
  { value: 1073, decimals: 0, suffix: '억', label: 'Total Dev. Cost' },
  { value: 450, decimals: 0, suffix: '억', label: 'Equity' },
  { value: 623, decimals: 0, suffix: '억', label: 'Senior PF' },
  { value: 78.4, decimals: 1, suffix: '억', label: 'Y1 NOI' },
  { value: 15.7, decimals: 1, suffix: '%', label: 'All-in Equity XIRR', accent: true },
  { value: 5.11, decimals: 2, suffix: 'x', label: 'Equity MOIC', accent: true },
];

export default function Home({ onNavigate }) {
  return (
    <>
      <section className="section hero">
        <div className="hero__media">
          <video
            className="hero__video"
            src="assets/seongsu-hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />
        </div>
        <div className="hero__scrim" />
        <div className="container hero__body">
          <div className="hero__stamp">Strictly Private and Confidential · 2026</div>
          <h1 className="hero__title">E4 Development Investment Proposal</h1>
          <p className="hero__lead">
            Seongsu × MUSINSA Master Lease × Institutional Core+ Asset. 성수 핵심입지와 MUSINSA의 장기 점유를 기반으로,
            운영을 통해 Institutional Core+ Asset으로 Value-Up.
          </p>
          <CountGroup className="stat-grid hero__stats">
            {HERO_STATS.map((stat) => (
              <div className="stat" key={stat.label}>
                <div className={`stat__value${stat.accent ? ' stat__value--accent' : ''}`}>
                  <Num value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                </div>
                <div className="stat__label stat__label--caps">{stat.label}</div>
              </div>
            ))}
          </CountGroup>
        </div>
      </section>

      <section className="section contents">
        <div className="container">
          <div className="eyebrow contents__label">Contents</div>
          <div className="contents__grid">
            {NAV.map((item) => (
              <button key={item.id} type="button" className="contents__row" onClick={() => onNavigate(item.id)}>
                <span className="contents__numeral">{item.numeral}</span>
                <span className="contents__title">{item.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
