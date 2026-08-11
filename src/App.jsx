import Footer from './components/Footer';
import Header from './components/Header';
import { useRoute } from './hooks/useRoute';
import Appendix from './sections/Appendix';
import BusinessOverview from './sections/BusinessOverview';
import ExecutiveSummary from './sections/ExecutiveSummary';
import ExitStrategy from './sections/ExitStrategy';
import Home from './sections/Home';
import Management from './sections/Management';
import RetailOperations from './sections/RetailOperations';
import RiskAnalysis from './sections/RiskAnalysis';
import Structure from './sections/Structure';
import Team from './sections/Team';

const PAGES = {
  sec1: ExecutiveSummary,
  sec2: BusinessOverview,
  sec3: Structure,
  sec4: ExitStrategy,
  sec5: RetailOperations,
  sec6: Management,
  sec7: RiskAnalysis,
  sec8: Appendix,
  team: Team,
};

export default function App() {
  const { page, go } = useRoute();
  const Page = PAGES[page];

  return (
    <div className="app">
      <Header page={page} onNavigate={go} />
      {/* Keyed by page so the staggered reveal animation replays on nav. */}
      {Page ? <Page key={page} /> : <Home key="home" onNavigate={go} />}
      <Footer />
    </div>
  );
}
