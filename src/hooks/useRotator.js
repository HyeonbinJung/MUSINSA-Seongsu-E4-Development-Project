import { useCallback, useEffect, useState } from 'react';

/**
 * Auto-advancing index used by the Executive Summary pillars and the
 * Retail operating blocks. Clicking an item selects it and restarts the
 * dwell timer, so a manual pick is never yanked away mid-read.
 */
export function useRotator(length, intervalMs = 3600, enabled = true) {
  const [index, setIndex] = useState(0);
  const [epoch, setEpoch] = useState(0);

  useEffect(() => {
    if (!enabled || length < 2) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % length), intervalMs);
    return () => clearInterval(id);
  }, [length, intervalMs, enabled, epoch]);

  const select = useCallback((next) => {
    setIndex(next);
    setEpoch((e) => e + 1);
  }, []);

  return [index, select];
}
