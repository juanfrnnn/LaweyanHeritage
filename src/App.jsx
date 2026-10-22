import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import ContextSection from './sections/ContextSection';
import ArtisanSection from './sections/ArtisanSection';
import ConductSection from './sections/ConductSection';
import HistorySection from './sections/HistorySection';
import PledgeSection from './sections/PledgeSection';
import { useActiveSection } from './hooks/useActiveSection';

const SECTION_IDS = ['beranda', 'konteks', 'pengrajin', 'etika', 'sejarah', 'komitmen'];

export default function App() {
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <>
      <Navbar activeSection={activeSection} />

      <main id="main-content">
        <HeroSection />
        <ContextSection />
        <ArtisanSection />
        <ConductSection />
        <HistorySection />
        <PledgeSection />
      </main>

      <Footer />
    </>
  );
}
