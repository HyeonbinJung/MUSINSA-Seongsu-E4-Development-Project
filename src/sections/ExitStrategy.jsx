import { CountGroup, Num } from '../components/CountGroup';
import SectionHeader from '../components/SectionHeader';
import { EXIT_PHASES, EXIT_REFERENCE, GROSS_SENSITIVITY, TIMELINE } from '../data/content';
import './ExitStrategy.css';

export default function ExitStrategy() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          numeral="Ⅳ"
          eyebrow="Exit Strategy"
          title="Dynamic Exit Framework"
          lead="Year 10은 의무 매각일이 아니라 Base Underwriting Horizon."
        />

        <div className="exit-phases">
          {EXIT_PHASES.map((phase) => (
            <div className="exit-phase" key={phase.title}>
              <div className="exit-phase__years">{phase.years}</div>
              <h3 className="exit-phase__title">{phase.title}</h3>
              {phase.points.map((point) => (
                <div className="exit-phase__point" key={point}>
                  {point}
                </div>
              ))}
              <div className="exit-phase__result">→ {phase.result}</div>
            </div>
          ))}
        </div>

        <div className="split exit-strategy__buyers">
          <div>
            <h3 className="sub-title sub-title--xs">Buyer Universe</h3>
            <div className="buyer">
              <div className="buyer__label">FI | FINANCIAL INVESTORS</div>
              <p className="buyer__body">
                부동산펀드 · REIT · 보험사 · 공제회 · Global Institutional Capital — NOI · WALE · Cap Rate · Financing ·
                IRR
              </p>
            </div>
            <div className="buyer">
              <div className="buyer__label">SI | STRATEGIC INVESTORS</div>
              <p className="buyer__body">
                MUSINSA · 패션/콘텐츠/IT 기업 · 성수 Owner-Occupier — Financial Value + Occupancy Value + Strategic Value
              </p>
            </div>
          </div>
          <div>
            <h3 className="sub-title sub-title--xs">Exit Execution Timeline</h3>
            {TIMELINE.map((row) => (
              <div className="timeline__row" key={row.when}>
                <div className="timeline__when">{row.when}</div>
                <div>
                  <div className="timeline__phase">{row.phase}</div>
                  <div className="timeline__detail">{row.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="block">
          <h3 className="sub-title">Exit Value Modeling</h3>
          <p className="sub-lead">
            Y11 Forward NOI를 Exit Cap으로 자본화한 Gross Exit Value에서 매각비용과 차입금을 차감해 Net Equity Proceeds를
            산출.
          </p>

          <CountGroup className="stat-grid exit-value__grid">
            <div className="stat stat--stacked">
              <div className="stat__label">FORWARD NOI (Y11)</div>
              <div className="stat__value">
                <Num value={105.4} decimals={1} suffix="억" />
              </div>
            </div>
            <div className="stat stat--stacked">
              <div className="stat__label">÷ EXIT CAP</div>
              <div className="stat__value">
                <Num value={4.5} decimals={2} suffix="%" />
              </div>
            </div>
            <div className="stat stat--stacked">
              <div className="stat__label">= GROSS EXIT VALUE</div>
              <div className="stat__value">
                <Num value={2341.4} decimals={1} suffix="억" />
              </div>
            </div>
            <div className="stat stat--stacked">
              <div className="stat__label">− COST · DEBT = NET EQUITY</div>
              <div className="stat__value stat__value--accent">
                <Num value={1695.0} decimals={1} suffix="억" />
              </div>
            </div>
          </CountGroup>

          <div className="note note--lg exit-value__footnote">
            Sale Cost 1.0% (23.4억) · Debt Repayment 623.0억 차감 기준. Total Y10 Equity CF 1,767.7억.
          </div>

          <div className="split">
            <div>
              <div className="kicker">GROSS EXIT VALUE SENSITIVITY (억원)</div>
              <div className="table">
                <div className="sens__row sens__row--head">
                  <div>Exit Cap \ NOI</div>
                  <div className="right">95%</div>
                  <div className="right">100%</div>
                  <div className="right">105%</div>
                </div>
                {GROSS_SENSITIVITY.map((row) => (
                  <div className={`sens__row${row.highlight ? ' sens__row--base' : ''}`} key={row.cap}>
                    <div className="sens__cap">{row.cap}</div>
                    <div className="right sens__muted">{row.a}</div>
                    <div className="right sens__strong">{row.b}</div>
                    <div className="right sens__muted">{row.c}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="kicker">SPOT TRANSACTION REFERENCE (2026 BASIS)</div>
              <div className="table">
                <div className="exit-ref__row exit-ref__row--head">
                  <div>Reference Case</div>
                  <div className="right">만원/평</div>
                  <div className="right">억원</div>
                </div>
                {EXIT_REFERENCE.map((row) => (
                  <div className="exit-ref__row" key={row.label}>
                    <div className="exit-ref__label">{row.label}</div>
                    <div className="right num exit-ref__pyeong">{row.pyeong}</div>
                    <div className="right num exit-ref__won">{row.won}</div>
                  </div>
                ))}
              </div>
              <p className="note note--lg exit-ref__note">
                2039 Gross Exit 2,341억원을 2026년으로 할인하면 6–8% 할인율 기준 878–1,114억원으로, Most Relevant Peer
                1,076억원과 유사한 범위.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
