import About from "@/components/about";
import HeroSection from "@/components/hero_section";
import NavigationBar from "@/components/navigation_bar";
import Project from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import PreferenceButton from "@/components/preference_button";

export default function Home() {
  return (
    <div className="min-h-screen">
      <PreferenceButton />
      <NavigationBar />
      <HeroSection />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
