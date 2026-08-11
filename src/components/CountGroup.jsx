import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { CONFIG } from '../config';

/** Eased 0→1 progress shared by every metric inside one CountGroup. */
const CountContext = createContext(1);

export function useCountProgress() {
  return useContext(CountContext);
}

/**
 * Wraps a block of metrics. When the block first scrolls into view the
 * progress runs 0 → 1 on a cubic ease-out, and every <Num> and bar
 * inside interpolates against it. Fires once per mount.
 */
export function CountGroup({ children, className, style, as: Tag = 'div', duration = CONFIG.countDuration }) {
  const enabled = CONFIG.animateNumbers;
  const ref = useRef(null);
  const frameRef = useRef(0);
  const [progress, setProgress] = useState(enabled ? 0 : 1);

  useEffect(() => {
    if (!enabled) return undefined;
    const node = ref.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      setProgress(1);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry || !entry.isIntersecting) return;
        observer.unobserve(entry.target);

        const start = performance.now();
        const step = (now) => {
          const ratio = Math.min(1, (now - start) / duration);
          setProgress(1 - Math.pow(1 - ratio, 3));
          if (ratio < 1) frameRef.current = requestAnimationFrame(step);
        };
        frameRef.current = requestAnimationFrame(step);
      },
      { threshold: 0.25 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameRef.current);
    };
  }, [enabled, duration]);

  return (
    <Tag ref={ref} className={className} style={style}>
      <CountContext.Provider value={progress}>{children}</CountContext.Provider>
    </Tag>
  );
}

/** A single animated figure. Renders text only — style it from the parent. */
export function Num({ value, decimals = 0, prefix = '', suffix = '' }) {
  const progress = useCountProgress();
  const shown = (value * progress).toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  return (
    <>
      {prefix}
      {shown}
      {suffix}
    </>
  );
}

/** Percentage string for bar heights/widths that grow with the group. */
export function useScaledPercent(value, max) {
  const progress = useCountProgress();
  return `${((value / max) * 100 * progress).toFixed(1)}%`;
}
