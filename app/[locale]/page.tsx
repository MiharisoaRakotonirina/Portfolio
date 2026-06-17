import About from "@/components/custom/about";
import HeroSection from "@/components/custom/hero_section";
import NavigationBar from "@/components/custom/navigation_bar";
import Project from "@/components/custom/projects";
import Contact from "@/components/custom/contact";
import Footer from "@/components/custom/footer";
import PreferenceButton from "@/components/custom/preference_button";
import Experience from "@/components/custom/experience";
import Skill from "@/components/custom/skill"

export default function Home() {
  return (
    <div className="min-h-screen">
      <PreferenceButton />
      <NavigationBar />
      <HeroSection />
      <About />
      <Skill />
      <Project />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
