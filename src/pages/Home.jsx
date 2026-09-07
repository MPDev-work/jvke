import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProjectShowcase from '../components/ProjectShowcase';
import About from '../components/About';
import TechStack from '../components/TechStack';
import Process from '../components/Process';
import StatementBanner from '../components/StatementBanner';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <ProjectShowcase />
        <About />
        <TechStack />
        <Process />
        <StatementBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
