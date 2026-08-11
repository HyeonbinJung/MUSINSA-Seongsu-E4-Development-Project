import { CountGroup, Num } from '../components/CountGroup';
import SectionHeader from '../components/SectionHeader';
import { SOURCES, USES } from '../data/content';
import './Structure.css';

const RETURN_STATS = [
  { value: 78.4, decimals: 1, suffix: '억', label: 'Y1 NOI' },
  { value: 7.3, decimals: 1, suffix: '%', label: 'Y1 YoC' },
  { value: 10.8, decimals: 1, suffix: '%', label: 'Y1 EQUITY CASH YIELD' },
  { value: 15.7, decimals: 1, suffix: '%', label: 'ALL-IN EQUITY XIRR', accent: true },
  { value: 5.11, decimals: 2, suffix: 'x', label: 'EQUITY MOIC', accent: true },
];

export default function Structure() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          numeral="Ⅲ"
          eyebrow="Investment & Fund Structure"
          title="Sources & Uses"
          lead="충분한 Equity Cushion과 Controlled Leverage를 결합해 Development Downside를 우선 방어. REF를 중심으로 Development → Stabilization → Long-term AM → Exit을 동일 Vehicle에서 수행."
        />

        <CountGroup className="su">
          <div>
            <div className="kicker">USES</div>
            {USES.map((row) => (
              <div className="su__row" key={row.label}>
                <span className="su__label">{row.label}</span>
                <span className="su__value num">{row.value}</span>
              </div>
            ))}
            <div className="su__total">
              <span className="su__total-label">Total Development Cost</span>
              <span className="su__total-value num">
                <Num value={1073} decimals={1} suffix="억" />
              </span>
            </div>
          </div>

          <div>
            <div className="kicker">SOURCES</div>
            {SOURCES.map((row) => (
              <div className="su__row" key={row.label}>
                <span className="su__label">{row.label}</span>
                <span className="su__pair">
                  <span className="su__value num">{row.value}</span>
                  <span className="su__pct">{row.pct}</span>
                </span>
              </div>
            ))}
            <div className="su__total">
              <span className="su__total-label">Total Sources</span>
              <span className="su__total-value num">
                <Num value={1073} decimals={1} suffix="억" />
              </span>
            </div>
          </div>
        </CountGroup>

        <div className="capstack">
          <div className="capstack__equity">EQUITY 41.9%</div>
          <div className="capstack__debt">SENIOR PF 58.1%</div>
        </div>
        <div className="capstack__notes">
          <div className="capstack__note">Cost Overrun Buffer · Lender Protection · Refinance Flexibility</div>
          <div className="capstack__note capstack__note--right">
            Capital Efficiency · Controlled Leverage · Post-completion Refi Option
          </div>
        </div>

        <h3 className="sub-title sub-title--sm structure__return-title">Base Return Profile</h3>
        <CountGroup className="stat-grid">
          {RETURN_STATS.map((stat) => (
            <div className="stat" key={stat.label}>
              <div className={`stat__value${stat.accent ? ' stat__value--accent' : ''}`}>
                <Num value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
              </div>
              <div className="stat__label">{stat.label}</div>
            </div>
          ))}
        </CountGroup>

        <div className="note structure__footnote">
          Base Return은 Platform Revenue나 미검증 AI Saving이 아니라 Master Lease 기반 Rental Income과 Asset Exit
          Value에서 발생.
        </div>
      </div>
    </section>
  );
}
