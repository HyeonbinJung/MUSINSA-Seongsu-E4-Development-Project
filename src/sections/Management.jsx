import SectionHeader from '../components/SectionHeader';
import { CONTROL_TOWER, OFFICE_FUNCTIONS } from '../data/content';
import './Management.css';

export default function Management() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          numeral="Ⅵ"
          eyebrow="Management & Buying Office"
          title="9–12F Control Tower"
          lead="9–12F는 단순 오피스가 아니라 1–8F Retail Platform을 실시간으로 조정하는 E4 운영 컨트롤타워."
        />

        <div className="office-fns">
          {OFFICE_FUNCTIONS.map((fn) => (
            <div className="office-fn" key={fn.title}>
              <div className="office-fn__title">{fn.title}</div>
              <div className="office-fn__detail">{fn.detail}</div>
            </div>
          ))}
        </div>

        <div className="tower">
          {CONTROL_TOWER.map((cell) => (
            <div className={`tower__cell${cell.highlight ? ' tower__cell--hub' : ''}`} key={cell.label}>
              <div className="tower__label">{cell.label}</div>
              <div className="tower__body">{cell.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
