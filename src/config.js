/**
 * Presentation knobs. These were editor-exposed props on the original
 * Design Canvas component; here they are plain module constants so the
 * whole app can read them without prop drilling.
 */
export const CONFIG = {
  /** Theme used on first visit, before anything is stored in localStorage. */
  defaultTheme: 'dark',
  /** Show the roman numerals next to the header nav labels. */
  showNumerals: false,
  /** Count metrics up from zero when their block scrolls into view. */
  animateNumbers: true,
  /** Duration of that count-up, in ms. */
  countDuration: 1200,
};

export const THEME_STORAGE_KEY = 'e4-theme';
