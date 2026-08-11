import KeyMessage from '../components/KeyMessage';
import SectionHeader from '../components/SectionHeader';
import { PILLARS } from '../data/content';
import { useRotator } from '../hooks/useRotator';
import './ExecutiveSummary.css';

export default function ExecutiveSummary() {
  const [active, select] = useRotator(PILLARS.length);

  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          numeral="Ⅰ"
          eyebrow="Executive Summary"
          title="Investment Thesis"
          lead="Value-Add의 핵심은 새로운 기능의 추가가 아니라, 동일 자산의 Income · Risk · Exit Economics를 개선하는 것."
        />

        <div className="pillars">
          {PILLARS.map((pillar, i) => (
            <button
              key={pillar.title}
              type="button"
              className={`pillar${active === i ? ' pillar--active' : ''}`}
              onClick={() => select(i)}
            >
              <span className="pillar__track" />
              <span className="pillar__fill" />
              <span className="pillar__kicker">{pillar.kicker}</span>
              <span className="pillar__title">{pillar.title}</span>
              <span className="pillar__body">{pillar.body}</span>
            </button>
          ))}
        </div>

        <div className="exec-summary__message">
          <KeyMessage>
            Pre-Leasing으로 Downside 방어 → 운영을 통한 NOI·Tenant Stickiness 개선 → Exit에서 Optionality와 Buyer
            Competition 극대화
          </KeyMessage>
        </div>
      </div>
    </section>
  );
}
