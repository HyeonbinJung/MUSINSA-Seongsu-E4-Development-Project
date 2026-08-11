import { CountGroup, Num, useScaledPercent } from '../components/CountGroup';
import KeyMessage from '../components/KeyMessage';
import SectionHeader from '../components/SectionHeader';
import {
  CF_CHART_MAX,
  CF_EQUITY,
  CF_NOI,
  CF_ROWS,
  CF_YEARS,
  FUNDING_LOGIC,
  MODEL,
  PF_BALANCES,
  PF_CHART_MAX,
  PF_METRICS,
  PF_QUARTERS,
  RETAIL_ROWS,
  ROADMAP,
  ROADMAP_PHASES,
} from '../data/content';
import './Appendix.css';

/** One NOI / CF-to-equity column of the stabilized cash-flow chart. */
function CfBar({ noi, cf }) {
  const noiHeight = useScaledPercent(noi, CF_CHART_MAX);
  const cfHeight = useScaledPercent(cf, CF_CHART_MAX);
  return (
    <div className="cf-chart__col">
      <div className="cf-chart__bar cf-chart__bar--noi" style={{ height: noiHeight }} />
      <div className="cf-chart__bar cf-chart__bar--cf" style={{ height: cfHeight }} />
    </div>
  );
}

/** One quarter of the PF drawdown chart. */
function PfBar({ balance }) {
  const height = useScaledPercent(balance, PF_CHART_MAX);
  return (
    <div className="pf-chart__col">
      <div className="pf-chart__label num">{balance}</div>
      <div className="pf-chart__bar" style={{ height }} />
    </div>
  );
}

const ROADMAP_STATS = [
  { value: 1073, decimals: 0, suffix: '억', label: 'Total Development Cost', tinted: true },
  { value: 78.4, decimals: 1, suffix: '억', label: 'Y1 NOI · 2030' },
  { value: 102.3, decimals: 1, suffix: '억', label: 'Y10 NOI · 2039' },
  { value: 2341, decimals: 0, suffix: '억', label: 'Gross Exit Value' },
  { value: 15.7, decimals: 1, suffix: '%', label: 'All-in Equity XIRR', accent: true },
];

export default function Appendix() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          numeral="Ⅷ"
          eyebrow="Financial Model Appendix"
          title="Base Case Return Summary"
          lead="Base Case는 10Y Master Lease, 3.0% annual escalation, 4.5% exit cap을 가정하며 플랫폼 직접수익은 미반영."
        />

        <div className="table">
          <div className="model__row model__row--head">
            <div>Metric</div>
            <div>Value</div>
            <div>Comment</div>
          </div>
          {MODEL.map((row) => (
            <div className="model__row model__row--body" key={row.metric}>
              <div className="model__metric">{row.metric}</div>
              <div className="model__value num">{row.value}</div>
              <div className="model__comment">{row.comment}</div>
            </div>
          ))}
        </div>
        <div className="note appendix__note">
          Platform direct revenue = Base Case 0 · Unverified smart-building saving = 0 · 계약상 NOI와 Exit value만 반영.
        </div>

        {/* ---- Stabilized operating CF --------------------------------- */}
        <div className="block">
          <h3 className="sub-title">Stabilized Operating CF Schedule</h3>
          <p className="sub-lead">
            10Y Master Lease와 3.0% annual escalation에 따라 NOI와 equity cash flow가 안정적으로 증가.
          </p>

          <div className="cf-legend">
            <div className="kicker cf-legend__title">NOI &amp; CF TO EQUITY (억원)</div>
            <div className="cf-legend__keys">
              <span className="cf-legend__key">
                <span className="cf-legend__swatch cf-legend__swatch--noi" />
                NOI
              </span>
              <span className="cf-legend__key">
                <span className="cf-legend__swatch cf-legend__swatch--cf" />
                CF to Equity
              </span>
            </div>
          </div>

          <CountGroup className="cf-chart">
            {CF_NOI.map((noi, i) => (
              <CfBar key={CF_YEARS[i]} noi={noi} cf={CF_EQUITY[i]} />
            ))}
          </CountGroup>

          <div className="cf-table">
            <div className="cf-table__row cf-table__row--head">
              <div>Metric</div>
              {CF_YEARS.map((year) => (
                <div className="right" key={year}>
                  {year}
                </div>
              ))}
            </div>
            {CF_ROWS.map((row) => (
              <div className={`cf-table__row cf-table__row--body${row.tinted ? ' cf-table__row--tinted' : ''}`} key={row.label}>
                <div className="cf-table__label">{row.label}</div>
                {row.values.map((value, i) => (
                  <div className="right num cf-table__value" key={`${row.label}-${CF_YEARS[i]}`}>
                    {value}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="appendix__readthrough">
            <KeyMessage label="OPERATING READ-THROUGH">
              Y1 NOI 78.4억 → Y10 NOI 102.3억. Interest-only 구조에서 NOI 성장이 equity cash flow로 직접 연결되어 CoC는
              10.8% → 16.2%로 개선
            </KeyMessage>
          </div>
        </div>

        {/* ---- PF drawdown --------------------------------------------- */}
        <div className="block">
          <h3 className="sub-title">Development PF Drawdown &amp; Capitalized Interest</h3>
          <p className="sub-lead">
            Equity-first structure followed by progressive PF drawdown; PF balance reaches 623억 at completion.
          </p>

          <div className="pf">
            <div>
              <div className="kicker pf__kicker">PF BALANCE — ENDING BALANCE (억원)</div>
              <CountGroup className="pf-chart">
                {PF_BALANCES.map((balance, i) => (
                  <PfBar key={PF_QUARTERS[i]} balance={balance} />
                ))}
              </CountGroup>
              <div className="pf-chart__axis">
                {PF_QUARTERS.map((quarter) => (
                  <div className="pf-chart__tick" key={quarter}>
                    {quarter}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="table">
                <div className="pf-metric__row pf-metric__row--head">
                  <div>Metric</div>
                  <div className="right">Value</div>
                </div>
                {PF_METRICS.map((row) => (
                  <div className={`pf-metric${row.tinted ? ' pf-metric--tinted' : ''}`} key={row.metric}>
                    <div className="pf-metric__row">
                      <div className="pf-metric__label">{row.metric}</div>
                      <div className="right num pf-metric__value">{row.value}</div>
                    </div>
                    <div className="pf-metric__comment">{row.comment}</div>
                  </div>
                ))}
              </div>

              <div className="kicker pf__funding-title">FUNDING LOGIC</div>
              {FUNDING_LOGIC.map((line) => (
                <div className="pf__funding-line" key={line}>
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ---- Retail income appendix ---------------------------------- */}
        <div className="block">
          <h3 className="sub-title">Retail Income Data Appendix — 1F to 8F</h3>
          <p className="sub-lead">
            Retail_Income_Master 기준 1–8F Gross Sales Proxy 및 benchmark basis를 appendix로 정리.
          </p>

          <div className="retail">
            <div>
              <div className="kicker">ANNUAL GROSS SALES PROXY BY FLOOR</div>
              <div className="table">
                <div className="retail__row retail__row--head">
                  <div>Floor</div>
                  <div>Program</div>
                  <div className="right">Gross Sales</div>
                  <div className="right">Share</div>
                </div>
                {RETAIL_ROWS.map((row) => (
                  <div className={`retail__row retail__row--body${row.total ? ' retail__row--total' : ''}`} key={row.floor}>
                    <div className="retail__floor">{row.floor}</div>
                    <div className="retail__program">{row.program}</div>
                    <div className="retail__sales">
                      <div className={`retail__bar retail__bar--${row.barTone}`} style={{ width: row.barWidth }} />
                      <div className="retail__amount num">{row.sales}</div>
                    </div>
                    <div className="right retail__share">{row.share}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="retail-card retail-card--tinted">
                <div className="retail-card__figure num">1,299.2억</div>
                <div className="retail-card__title">Total 1F–8F</div>
                <div className="retail-card__note">Tenant / store / event gross-sales proxy</div>
              </div>
              <div className="retail-card">
                <div className="retail-card__figure num">335.8억</div>
                <div className="retail-card__title">5F–8F Fixed Retail</div>
                <div className="retail-card__note">Beauty + Fashion + Resale</div>
              </div>
              <div className="retail-card retail-card--important">
                <div className="retail-card__label">IMPORTANT NOTE</div>
                <div className="retail-card__body">
                  Gross Sales Proxy는 Landlord NOI 또는 임대수익이 아니라 tenant/operator-level sales benchmark임
                </div>
                <div className="retail-card__body retail-card__body--muted">
                  Base CF model NOI는 별도 임대료 산출식의 rental NOI를 사용
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---- Roadmap -------------------------------------------------- */}
        <div className="block">
          <h3 className="sub-title">Project Roadmap 2026–2039</h3>
          <p className="sub-lead">
            Development 3년 · Stabilized Operation 10년 · Exit 준비 1년을 하나의 일정으로 관리.
          </p>

          <div className="phases">
            {ROADMAP_PHASES.map((phase) => (
              <div className={`phase${phase.active ? ' phase--active' : ''}`} key={phase.label}>
                <span className="phase__label">{phase.label}</span>
                <span className="phase__span">{phase.span}</span>
              </div>
            ))}
          </div>

          <div className="roadmap">
            {ROADMAP.map((step) => (
              <div className={`roadmap__cell${step.highlight ? ' roadmap__cell--exit' : ''}`} key={step.when}>
                <div className="roadmap__when">{step.when}</div>
                <div className="roadmap__title">{step.title}</div>
                <div className="roadmap__detail">{step.detail}</div>
              </div>
            ))}
          </div>

          <CountGroup className="stat-grid roadmap__stats">
            {ROADMAP_STATS.map((stat) => (
              <div className={`stat${stat.tinted ? ' stat--tinted' : ''}`} key={stat.label}>
                <div className={`stat__value stat__value--sm${stat.accent ? ' stat__value--accent' : ''}`}>
                  <Num value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                </div>
                <div className="stat__label stat__label--roadmap">{stat.label}</div>
              </div>
            ))}
          </CountGroup>

          <KeyMessage label="DECISION POINTS">
            2029 준공·임대 개시 → 2036 재계약 협상 개시 → 매년 즉시 매각가치와 추가 보유수익률을 비교해 Exit 시점 결정
          </KeyMessage>
        </div>
      </div>
    </section>
  );
}
