import { CountGroup, Num } from '../components/CountGroup';
import SectionHeader from '../components/SectionHeader';
import { PROGRAM } from '../data/content';
import './BusinessOverview.css';

export default function BusinessOverview() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          numeral="Ⅱ"
          eyebrow="Business Overview"
          title="Why Seongsu?"
          lead="Office Demand와 Destination Retail이 교차하는 서울의 Emerging Business District."
        />

        <div className="market">
          <div className="market__cell">
            <div className="market__label">OFFICE | Corporate Migration</div>
            <p className="market__body">
              성수는 패션·콘텐츠 기업 집적을 넘어 IT·플랫폼·제조기업의 전략적 이전이 이어지는 신규 업무권역으로 진화.
              현대오토에버·G마켓 등 기업 이전으로 실질적인 Office Demand 확인.
            </p>
          </div>
          <div className="market__cell">
            <div className="market__label">RETAIL | Destination District</div>
            <p className="market__body">
              연무장길을 중심으로 패션·F&amp;B·체험형 콘텐츠가 집적되며 소비자 접점형 Destination Retail District로 발전.
              단순 판매상권이 아니라 브랜드가 고객과 직접 만나는 공간으로 진화.
            </p>
          </div>
          <div className="market__cell">
            <div className="market__label market__label--wide">MARKET SIGNAL &amp; SCARCITY</div>
            <CountGroup className="market__figures">
              <div>
                <div className="market__figure">
                  <Num value={14} decimals={0} prefix="+" suffix="%" />
                </div>
                <div className="market__figure-label">Retail Rent YoY</div>
              </div>
              <div>
                <div className="market__figure">
                  <Num value={3.4} decimals={1} suffix="%" />
                </div>
                <div className="market__figure-label">Retail Vacancy</div>
              </div>
            </CountGroup>
            <p className="market__body market__body--sm">
              핵심권역 내 대형 개발 가능부지는 제한적인 반면 신축·고품질 공간 수요는 확대.
            </p>
          </div>
        </div>

        <h3 className="sub-title sub-title--sm">Development Concept</h3>
        <p className="sub-lead sub-lead--concept">현재의 공간설계 단계에서 10년 후 Re-leasing과 Exit까지 역산.</p>

        <div className="table">
          <div className="table__head program__row">
            <div>Zone</div>
            <div>Program</div>
            <div>Investment Role</div>
          </div>
          {PROGRAM.map((row) => (
            <div className="program__row program__row--body table__row--hover" key={row.zone}>
              <div className="program__zone">{row.zone}</div>
              <div className="program__program">{row.program}</div>
              <div className="program__role">{row.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
