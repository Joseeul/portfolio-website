import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import EducationHistory from "../components/EducationHistory";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutMe />
      <Services />
      <Portfolio />
      <Skills />
      <EducationHistory />
      <WorkExperience />
      <Footer />
    </div>
  );
}
