import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MetricsOverview from './components/MetricsOverview';
import CaseStudies from './components/CaseStudies';
import TechStack from './components/TechStack';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <MetricsOverview />
        <CaseStudies />
        <TechStack />
      </main>
      <Footer />
    </div>
  );
}

export default App;
