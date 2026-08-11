/** Accent-ruled callout used to close out a section or sub-block. */
export default function KeyMessage({ label = 'KEY MESSAGE', children }) {
  return (
    <div className="key-message">
      <div className="key-message__label">{label}</div>
      <div className="key-message__body">{children}</div>
    </div>
  );
}
