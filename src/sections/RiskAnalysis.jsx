import { CountGroup, Num } from '../components/CountGroup';
import KeyMessage from '../components/KeyMessage';
import SectionHeader from '../components/SectionHeader';
import { IRR_SENSITIVITY, RISK_REGISTER, SCENARIOS } from '../data/content';
import './RiskAnalysis.css';

function Waterfall() {
  return (
    <CountGroup>
      <div className="kicker">EXIT WATERFALL (억원)</div>
      <div className="waterfall__row">
        <span className="waterfall__label">Gross Exit Value</span>
        <span className="waterfall__value num">
          <Num value={2341.4} decimals={1} />
        </span>
      </div>
      <div className="waterfall__row">
        <span className="waterfall__label">Sale Cost</span>
        <span className="waterfall__value waterfall__value--muted num">
          (<Num value={23.4} decimals={1} />)
        </span>
      </div>
      <div className="waterfall__row">
        <span className="waterfall__label">Debt Repayment</span>
        <span className="waterfall__value waterfall__value--muted num">
          (<Num value={623.0} decimals={1} />)
        </span>
      </div>
      <div className="waterfall__row">
        <span className="waterfall__label">Net Equity Proceeds</span>
        <span className="waterfall__value waterfall__value--accent num">
          <Num value={1695.0} decimals={1} />
        </span>
      </div>
      <div className="waterfall__figures">
        <div>
          <div className="waterfall__figure num">
            <Num value={105.4} decimals={1} suffix="억" />
          </div>
          <div className="waterfall__figure-label">FORWARD NOI (Y11)</div>
        </div>
        <div>
          <div className="waterfall__figure num">
            <Num value={4.5} decimals={2} suffix="%" />
          </div>
          <div className="waterfall__figure-label">EXIT CAP</div>
        </div>
      </div>
    </CountGroup>
  );
}

export default function RiskAnalysis() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          numeral="Ⅶ"
          eyebrow="Exit & Risk Analysis"
          title="Sensitivity & Exit Waterfall"
          lead="Exit cap과 NOI 변화에 대한 민감도 분석을 병행하며, Base Case는 4.50% exit cap · 100% NOI 기준."
        />

        <div className="risk__top">
          <div>
            <div className="kicker">EQUITY IRR SENSITIVITY</div>
            <div className="table">
              <div className="sens__row sens__row--head">
                <div>Exit Cap \ NOI</div>
                <div className="right">95%</div>
                <div className="right">100%</div>
                <div className="right">105%</div>
              </div>
              {IRR_SENSITIVITY.map((row) => (
                <div className={`sens__row${row.highlight ? ' sens__row--base' : ''}`} key={row.cap}>
                  <div className="sens__cap">{row.cap}</div>
                  <div className="right sens__muted">{row.a}</div>
                  <div className="right sens__strong">{row.b}</div>
                  <div className="right sens__muted">{row.c}</div>
                </div>
              ))}
            </div>
            <div className="note risk__sens-note">
              Base case (100% NOI, 4.50% cap): Gross Exit 2,341억원 / All-in Equity XIRR 15.7%. NOI +5% 또는 cap −25bp 시
              XIRR 16%대까지 확대.
            </div>
          </div>

          <Waterfall />
        </div>

        {/* ---- Scenario matrix -------------------------------------- */}
        <div className="block">
          <h3 className="sub-title">Base / Downside / Stress Scenario Matrix</h3>
          <p className="sub-lead sub-lead--matrix">
            임대차 갱신, Exit Cap, 공사비 초과, 지연 및 리파이낸싱 금리를 동시에 반영한 통합 시나리오.
          </p>
          <div className="table">
            <div className="scenario__row scenario__row--head">
              <div>Metric</div>
              <div className="right">Base</div>
              <div className="right">Downside</div>
              <div className="right">Stress</div>
            </div>
            {SCENARIOS.map((row) => (
              <div className="scenario__row scenario__row--body" key={row.metric}>
                <div className="scenario__metric">{row.metric}</div>
                <div className="right num scenario__base">{row.base}</div>
                <div className="right num scenario__alt">{row.down}</div>
                <div className="right num scenario__alt">{row.stress}</div>
              </div>
            ))}
          </div>
          <div className="note risk__matrix-note">
            Downside에서도 XIRR 11.4%, Stress에서도 7.6%로 방어. Return and credit metrics remain above forced-sale
            threshold even under Stress.
          </div>
        </div>

        {/* ---- Risk register ---------------------------------------- */}
        <div className="block block--tight">
          <h3 className="sub-title">Key Risk Register &amp; Mitigation Plan</h3>
          <p className="sub-lead sub-lead--matrix">
            모델링된 리스크와 정성적 리스크를 구분하고, 투자위원회 관점의 대응책을 명시.
          </p>
          <div className="table">
            <div className="register__row register__row--head">
              <div>Risk</div>
              <div>Impact</div>
              <div>Base Exposure</div>
              <div>Downside Mechanism</div>
              <div>Mitigation / Response</div>
            </div>
            {RISK_REGISTER.map((row) => (
              <div className="register__row register__row--body" key={row.risk}>
                <div className="register__risk">{row.risk}</div>
                <div className="register__impact">{row.impact}</div>
                <div className="register__muted">{row.exposure}</div>
                <div className="register__muted">{row.mechanism}</div>
                <div className="register__mitigation">{row.mitigation}</div>
              </div>
            ))}
          </div>
          <div className="risk__philosophy">
            <KeyMessage label="RISK PHILOSOPHY">
              IRR을 높이기 위한 과도한 leverage가 아니라, Lease / Exit / Construction / Refi shock을 견디는 구조를 우선
              설계
            </KeyMessage>
          </div>
        </div>
      </div>
    </section>
  );
}
