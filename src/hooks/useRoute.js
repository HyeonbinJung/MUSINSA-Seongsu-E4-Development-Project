import { useCallback, useEffect, useState } from 'react';
import { PAGE_IDS } from '../data/nav';

function pageFromHash() {
  const id = window.location.hash.replace(/^#\/?/, '');
  return PAGE_IDS.includes(id) ? id : 'home';
}

/**
 * Hash-based routing so every section is deep-linkable and the browser
 * back button works. Navigating always resets scroll, matching the
 * original deck behaviour where each section is its own "slide".
 */
export function useRoute() {
  const [page, setPage] = useState(pageFromHash);

  useEffect(() => {
    const onHashChange = () => setPage(pageFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [page]);

  const go = useCallback((next) => {
    window.location.hash = next === 'home' ? '/' : `/${next}`;
    setPage(next);
  }, []);

  return { page, go };
}
