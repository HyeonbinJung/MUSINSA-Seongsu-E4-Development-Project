import { CAPABILITY, TEAM } from '../data/content';
import './Team.css';

export default function Team() {
  return (
    <section className="section">
      <div className="container">
        <div className="eyebrow team__eyebrow">Team E4</div>
        <h2 className="section-title">Team Introduction</h2>
        <p className="section-lead">
          Global Academic Background × Investment Research × Deal Advisory Perspective.
        </p>

        {TEAM.map((person) => (
          <div className="member" key={person.name}>
            <div>
              <div className="member__name">{person.name}</div>
              <div className="member__role">{person.role}</div>
            </div>
            <div>
              <div className="member__label">EDUCATION</div>
              <div className="member__school">{person.school}</div>
              <div className="member__degree">{person.degree}</div>
            </div>
            <div>
              <div className="member__label">EXPERIENCE / FOCUS</div>
              <div className="member__focus">{person.focus}</div>
            </div>
          </div>
        ))}

        <div className="capability">
          <div className="member__label">TEAM CAPABILITY</div>
          <div className="capability__tags">
            {CAPABILITY.map((tag) => (
              <div className="capability__tag" key={tag}>
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
