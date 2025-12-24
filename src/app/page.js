import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import Technologies from './components/sections/Technologies';
import Contact from './components/sections/Contact';
import SocialHandles from './components/sections/SocialHandles';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <SocialHandles />
      <main className="max-w-7xl mx-auto w-full px-4 overflow-x-hidden">
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Technologies />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
