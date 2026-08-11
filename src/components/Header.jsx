import { CONFIG } from '../config';
import { NAV } from '../data/nav';
import { useTheme } from '../hooks/useTheme';
import './Header.css';

export default function Header({ page, onNavigate }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="header__inner">
        <button type="button" className="brand" onClick={() => onNavigate('home')}>
          <span className="brand__top">
            <span className="brand__name">Mastern</span>
            <span className="brand__suffix">Investment Management</span>
          </span>
          <span className="brand__project">MUSINSA Seongsu E4 Development Project</span>
        </button>

        <nav className="nav">
          {NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`nav__item${page === item.id ? ' nav__item--active' : ''}`}
              onClick={() => onNavigate(item.id)}
            >
              {CONFIG.showNumerals && <span className="nav__numeral">{item.numeral}</span>}
              <span>{item.label}</span>
            </button>
          ))}

          <button type="button" className="theme-toggle" onClick={toggleTheme}>
            <span className="theme-toggle__dot" />
            <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
