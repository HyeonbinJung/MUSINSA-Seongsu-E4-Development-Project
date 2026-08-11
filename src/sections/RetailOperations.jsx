import ImageSlot from '../components/ImageSlot';
import KeyMessage from '../components/KeyMessage';
import SectionHeader from '../components/SectionHeader';
import {
  ANCHOR_LOGIC,
  EXPOSURE_LOGIC,
  FLOORS,
  FLOW_STEPS,
  OP_BLOCKS,
  PLATFORM_CARDS,
  SMART_OPS,
  ZONE_CARDS,
  ZONING,
  ZONING_RULES,
} from '../data/content';
import { useRotator } from '../hooks/useRotator';
import './RetailOperations.css';

function LogicList({ rows }) {
  return rows.map((row) => (
    <div className="logic__row" key={row.title}>
      <div className="logic__title">{row.title}</div>
      <div className="logic__detail">{row.detail}</div>
    </div>
  ));
}

export default function RetailOperations() {
  const [activeOp, selectOp] = useRotator(OP_BLOCKS.length, 3600);

  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          numeral="Ⅴ"
          eyebrow="Retail · ESG · AI Operations"
          title="Vertical Retail Stack"
          lead="1–4F Popup Discovery에서 5–8F Fixed Retail까지, 올라갈수록 목적방문형 성격이 강해지는 Vertical Retail Narrative."
        />

        <div className="table floor-stack">
          {FLOORS.map((floor) => (
            <div className="floor" key={floor.floor}>
              <div className="floor__label">{floor.floor}</div>
              <div>
                <div className="floor__name">{floor.name}</div>
                <div className="floor__detail">{floor.detail}</div>
              </div>
              <div className="floor__metric-wrap">
                <div className="floor__metric">{floor.metric}</div>
                <div className="floor__metric-label">{floor.metricLabel}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="smart-ops">
          {SMART_OPS.map((item) => (
            <div className="smart-op" key={item.label}>
              <div className="smart-op__label">{item.label}</div>
              <p className="smart-op__body">{item.body}</p>
            </div>
          ))}
        </div>

        <KeyMessage label="UNDERWRITING DISCIPLINE">
          미검증 AI·ESG Saving은 Base Case NOI에 반영하지 않고, 실제 운영 과정에서 측정·검증된 Saving만 Upside로 반영
        </KeyMessage>

        {/* ---- Retail Operating Platform ---------------------------- */}
        <div className="block">
          <h3 className="sub-title">Retail Operating Platform</h3>
          <p className="sub-lead sub-lead--wide">
            무신사는 로고를 소비시키는 공간이 아니라 브랜드를 발굴 · 검증 · 성장시키는 Offline Platform Operator로 기능.
          </p>

          <div className="cards">
            {PLATFORM_CARDS.map((card) => (
              <div className="card" key={card.title}>
                <div className="card__media card__media--short">
                  <ImageSlot src={card.src} placeholder={card.title} />
                </div>
                <div className="card__foot">
                  <span className="card__title">{card.title}</span>
                  <span className="card__detail">{card.detail}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="op-blocks">
            {OP_BLOCKS.map((block, i) => (
              <button
                key={block.index}
                type="button"
                className={`op-block${activeOp === i ? ' op-block--active' : ''}`}
                onClick={() => selectOp(i)}
              >
                <span className="op-block__fill" />
                <span className="op-block__index">{block.index}</span>
                <span className="op-block__title">{block.title}</span>
                {block.lines.map((line) => (
                  <span className="op-block__line" key={line}>
                    {line}
                  </span>
                ))}
              </button>
            ))}
          </div>

          <KeyMessage>E4는 일반 쇼핑몰이 아니라 팝업 · 전시 · 카페 · 데이터가 연결되는 오프라인 패션 플랫폼</KeyMessage>
        </div>

        {/* ---- Floor plan & zoning ---------------------------------- */}
        <div className="block">
          <h3 className="sub-title">Retail Floor Plan &amp; Zoning (1F–4F)</h3>
          <p className="sub-lead sub-lead--wide">
            브랜드 등급별 구역과 관람 동선을 층별 도면으로 확정하고, 리테일 전용률 47%를 반영한 배치안.
          </p>

          <div className="floorplan">
            <div className="floorplan__figure">
              <img src="assets/floorplan-1f-4f.png" alt="무신사 성수 E4 리테일 층별 운영 도면 (1F~4F)" />
            </div>
            <div>
              <div className="kicker floorplan__kicker">FLOOR ALLOCATION</div>
              <div className="table zoning">
                <div className="zoning__row zoning__row--head">
                  <div>층</div>
                  <div>구성</div>
                  <div className="right">A</div>
                  <div className="right">B</div>
                  <div className="right">C</div>
                </div>
                {ZONING.map((row) => (
                  <div className="zoning__row zoning__row--body" key={row.floor}>
                    <div className="zoning__floor">{row.floor}</div>
                    <div className="zoning__mix">{row.mix}</div>
                    <div className="right zoning__pct">{row.a}</div>
                    <div className="right zoning__pct">{row.b}</div>
                    <div className="right zoning__pct">{row.c}</div>
                  </div>
                ))}
              </div>

              <div className="kicker floorplan__kicker floorplan__kicker--rules">운영 원리</div>
              {ZONING_RULES.map((rule) => (
                <div className="zoning__rule" key={rule}>
                  {rule}
                </div>
              ))}
              <div className="note floorplan__note">※ 리테일 전용률 47% 가정 반영</div>
            </div>
          </div>
        </div>

        {/* ---- Vertical anchor & customer flow ---------------------- */}
        <div className="block">
          <h3 className="sub-title">Vertical Anchor &amp; Customer Flow (1F–4F)</h3>
          <p className="sub-lead sub-lead--wide">
            상층 A형 앵커가 건물 전체 유동을 만들고, 저층 C형이 그 이동량을 흡수하는 통제된 우회동선.
          </p>

          <div className="flow">
            {FLOW_STEPS.map((step, i) => (
              <div className="flow__step" key={step.label}>
                <div className={`flow__chip${step.on ? ' flow__chip--on' : ''}`}>{step.label}</div>
                {i < FLOW_STEPS.length - 1 && <span className="flow__arrow">→</span>}
              </div>
            ))}
          </div>

          <div className="split flow__logic">
            <div>
              <div className="kicker">1 WHY A-TYPE GOES UP</div>
              <LogicList rows={ANCHOR_LOGIC} />
            </div>
            <div>
              <div className="kicker">2 HOW C/B-TYPE GETS EXPOSURE</div>
              <LogicList rows={EXPOSURE_LOGIC} />
            </div>
          </div>

          <div className="cards">
            {ZONE_CARDS.map((card) => (
              <div className="card" key={card.title}>
                <div className="card__media">
                  <ImageSlot src={card.src} placeholder={`${card.title} 이미지`} />
                </div>
                <div className="card__foot card__foot--stacked">
                  <span className="card__title">{card.title}</span>
                  <span className="card__detail">{card.detail}</span>
                </div>
              </div>
            ))}
          </div>

          <KeyMessage>
            미로가 아니라 목적지가 명확한 통제된 우회동선이며, 효과는 앱 예약 · 층간 이동률 · 쇼윈도 정지율 · 진입률 ·
            구매전환율로 검증·보정
          </KeyMessage>
        </div>
      </div>
    </section>
  );
}
