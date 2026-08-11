/** Numeral + eyebrow + title + lead, repeated at the top of every section. */
export default function SectionHeader({ numeral, eyebrow, title, lead }) {
  return (
    <>
      <div className="section-head">
        {numeral && <span className="section-head__numeral">{numeral}</span>}
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="section-title">{title}</h2>
      {lead && <p className="section-lead">{lead}</p>}
    </>
  );
}
