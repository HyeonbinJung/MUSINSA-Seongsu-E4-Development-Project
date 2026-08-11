import { useState } from 'react';
import './ImageSlot.css';

/**
 * Replacement for the deck's <image-slot> custom element. Renders the
 * asset when it resolves and falls back to a labelled placeholder when
 * the file is missing, so the layout never collapses.
 */
export default function ImageSlot({ src, alt, placeholder, height }) {
  const [failed, setFailed] = useState(!src);

  return (
    <div className="image-slot" style={height ? { height } : undefined}>
      {!failed && (
        <img className="image-slot__img" src={src} alt={alt ?? placeholder ?? ''} onError={() => setFailed(true)} />
      )}
      {failed && (
        <div className="image-slot__placeholder">
          <span>{placeholder}</span>
        </div>
      )}
    </div>
  );
}
